<template>
    <div class="container">
        <PGTable :data="roles" title="角色列表" :showSelect="true" :total="total" :currentPage="currentPage">
            <template v-slot:action>
                <el-button type="primary">添加</el-button>
            </template>
            <template v-slot:content>
                <el-table-column prop="ID" label="角色ID" sortable>
                </el-table-column>
                <el-table-column prop="role" label="角色名">
                </el-table-column>
                <el-table-column prop="description" label="描述">
                </el-table-column>
                <el-table-column label="权限">
                    <template #default="scope">
                        <el-button name="default_all" type="primary" size="small" @click="showRoleDetail">查看</el-button>
                        <el-button name="role_modify" type="primary" size="small">变更</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right">
                    <template #default="scope">
                        <el-button :disabled="[1].includes(scope.row.id)" name="role_update" size="small"
                            type="primary">编辑</el-button>
                        <el-popconfirm title="确定删除此角色?">
                            <template #reference>
                                <el-button :disabled="[1].includes(scope.row.id)" slot="reference" name="role_delete"
                                    type="danger" size="small">
                                    删除
                                </el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </template>
        </PGTable>

        <el-drawer :title="title" v-model="showDetail" direction="rtl">
            <RoleDetail />
        </el-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage } from 'element-plus';

import PGTable from "@/components/PGTable.vue";
import RoleDetail from "./components/RoleDetail.vue";

import { getRolesPaged } from "@/request/role";
import { RespCodeOK } from "@/request/request";

const roles = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

onMounted(() => {
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
})


const title = ref("权限详情")
const showDetail = ref(false)

function showRoleDetail() {
    showDetail.value = true
}

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>