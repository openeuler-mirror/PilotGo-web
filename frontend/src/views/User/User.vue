<template>
    <div class="container">
        <PGTable :data="users" title="用户列表" :showSelect="true">
            <template v-slot:action>
                <div class="search">
                    <el-input v-model.trim="searchInput" placeholder="请输入邮箱名进行搜索..." style="width: 300px;" />
                    <el-button type="primary" @click="onSearchUser">搜索</el-button>
                    <el-divider direction="vertical" style="height: 2.5em;" />
                    <el-button type="primary" style="margin-left: 0px;">添加</el-button>
                    <el-button type="primary">删除</el-button>
                    <el-button type="primary">导出</el-button>
                    <el-button type="primary">批量导入</el-button>
                </div>
            </template>
            <template v-slot:content>
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
                    <template #default="scope">
                        <el-button type="primary" size="small">编辑</el-button>
                        <el-button type="danger" size="small">重置密码</el-button>
                    </template>
                </el-table-column>
            </template>
        </PGTable>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage } from 'element-plus';

import PGTable from "@/components/PGTable.vue";

import { getUsers, searchUser } from "@/request/user";
import { RespCodeOK } from "@/request/request";

const users = ref([])


const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

onMounted(() => {
    getUsers({
        page: currentPage.value,
        size: pageSize.value,
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            total.value = resp.total
            currentPage.value = resp.page
            pageSize.value = resp.size
            users.value = resp.data
        } else {
            ElMessage.error("failed to get users info: " + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to get users info:" + err.msg)
    })
})

const searchInput = ref("")

function onSearchUser() {
    searchUser({
        email: searchInput.value
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            total.value = resp.total
            currentPage.value = resp.page
            pageSize.value = resp.size
            users.value = resp.data
        } else {
            ElMessage.error("failed to search users:" + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to search users:" + err.msg)
    })
}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;

    .search {
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .el-button {
        margin-left: 5px;
    }

}
</style>