<template>
    <div class="container">
        <PGTable :data="roles" title="角色列表" :showSelect="true" :total="total" :currentPage="currentPage">
            <template v-slot:action>
                <el-button type="primary" @click="onAddRole">添加</el-button>
            </template>
            <template v-slot:content>
                <el-table-column prop="id" label="角色ID" sortable>
                </el-table-column>
                <el-table-column prop="role" label="角色名">
                </el-table-column>
                <el-table-column prop="description" label="描述">
                </el-table-column>
                <el-table-column label="权限">
                    <template #default="scope">
                        <el-button name="default_all" type="primary" size="small"
                            @click="showRoleDetail(scope.row)">查看</el-button>
                        <el-button name="role_modify" type="primary" size="small" v-if="!(scope.row.role === 'admin')"
                            @click="onEditRoleDetail(scope.row)">变更</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right">
                    <template #default="scope">
                        <el-button :disabled="(scope.row.role === 'admin')" name="role_update" size="small" type="primary"
                            @click="onEditRoleInfo">编辑</el-button>
                        <el-popconfirm title="确定删除此角色?" @confirm="onDeleteRole(scope.row)">
                            <template #reference>
                                <el-button :disabled="(scope.row.role === 'admin')" slot="reference" name="role_delete"
                                    type="danger" size="small">
                                    删除
                                </el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </template>
        </PGTable>

        <el-dialog :title="roleOperateTitle" v-model="showRoleOperate">
            <UpdateRole v-if="operate === 'UpdateRole'" />
            <AddRole v-if="operate === 'AddRole'" />
        </el-dialog>

        <el-drawer :title="roleDetailTitle" v-model="showDetail" direction="rtl">
            <RoleDetail :showEdit="showDetailEdit" :role="editedRole" />
        </el-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage } from 'element-plus';

import PGTable from "@/components/PGTable.vue";
import RoleDetail from "./components/RoleDetail.vue";
import AddRole from "./components/AddRole.vue";
import UpdateRole from "./components/UpdateRole.vue";

import { getRolesPaged, deleteRole } from "@/request/role";
import { RespCodeOK } from "@/request/request";

const roles = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

onMounted(() => {
    updateRoles()
})

function updateRoles() {
    getRolesPaged({
        page: currentPage.value,
        size: pageSize.value,
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            total.value = resp.total
            currentPage.value = resp.page
            pageSize.value = resp.size
            roles.value = resp.data
        } else {
            ElMessage.error("failed to get role info: " + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to get role info:" + err.msg)
    })
}

const roleDetailTitle = ref("权限详情")
const showDetail = ref(false)
const showDetailEdit = ref(false)

function showRoleDetail(role: any) {
    showDetailEdit.value = false
    showDetail.value = true
}

const editedRole = ref("")
function onEditRoleDetail(role: any) {
    editedRole.value = role.role
    showDetailEdit.value = true
    showDetail.value = true
}

const roleOperateTitle = ref("编辑角色")
const showRoleOperate = ref(false)
const operate = ref("")

function onEditRoleInfo() {
    roleOperateTitle.value = "编辑角色"
    showRoleOperate.value = true
    operate.value = "UpdateRole"
}

function onAddRole() {
    roleOperateTitle.value = "添加角色"
    showRoleOperate.value = true
    operate.value = "AddRole"
}

function onDeleteRole(role: any) {
    // TODO: use other params
    deleteRole({
        role: role.role
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            updateRoles()
        } else {
            ElMessage.error("failed to delete role:" + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to delete role:" + err.msg)
    })
}

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>