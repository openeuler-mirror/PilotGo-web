<template>
    <div v-loading="loading" class="panel" style="height:100%">
        <Table :getData="getUsers" ref="table" id="exportTab">
            <template v-slot:table_search>
                <el-input placeholder="请输入邮箱名进行搜索..." prefix-icon="el-icon-search" clearable
                    style="width: 280px;margin-right: 10px;" v-model="emailInput"
                    @keydown.enter.native="searchUser"></el-input>
                <el-button icon="el-icon-search" @click="searchUser">
                    搜索
                </el-button>
            </template>
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
                </el-table-column>
            </template>
        </Table>
    </div>
</template>

<script lang='ts' setup>
import Table from '@/components/UserManager/UserTable.vue'
import { getUsers, searchUser } from '@/request/user'
import { ref } from 'vue'
const loading = ref(false)
const display = ref(false)
const title = ref('')
const rowData = ref()
const type = ref('')
const emailInput = ref('')

const handleEdit = (row: any) => {
    rowData.value = row;
    display.value = true;
    title.value = "编辑用户";
    type.value = "update";
}

searchUser({ 'email': emailInput.value }).then((res) => {
})

</script>

<style lang = 'scss' scoped></style>
