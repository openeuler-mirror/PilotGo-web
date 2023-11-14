<template>
    <div v-loading="loading" class="panel" style="height:100%">
        <Table :getData="getUsers" ref="table" id="exportTab">
            <template v-slot:table>
                <el-table-column prop="username" label="用户名">
                </el-table-column>
                <el-table-column prop="departName" label="部门">
                </el-table-column>
                <el-table-column prop="role" label="角色">
                </el-table-column>
                <el-table-column prop="phone" label="手机号">
                </el-table-column>
                <el-table-column prop="email" label="邮箱">
                </el-table-column>
                <el-table-column label="操作" fixed="right" class="operate">
                    <template>
                        <auth-button name="user_edit" class="editBtn" type="primary" plain size="mini">编辑</auth-button>
                        <auth-button name="user_reset" class="editBtn" type="primary" plain size="mini">重置密码</auth-button>
                    </template>
                </el-table-column>
            </template>
        </Table>
    </div>
</template>

<script lang='ts' setup>
import Table from '@/components/UserManager/UserTable.vue'
import { getUsers } from '@/request/user'
import { ref } from 'vue'
const loading = ref(false)
const display = ref(false)
const title = ref('')
const rowData = ref()
const type = ref('')

const handleEdit = (row: any) => {
    rowData.value = row;
    display.value = true;
    title.value = "编辑用户";
    type.value = "update";
}
</script>

<style lang = 'scss' scoped></style>
