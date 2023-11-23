<template>
    <div class="container">
        <PGTable :data="users" title="用户列表" :showSelect="true">
            <template v-slot:action>
                <div class="search">
                    <el-input v-model="searchInput" placeholder="请输入邮箱名进行搜索..." style="width: 300px;" />
                    <el-button type="primary">搜索</el-button>
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
                    <template slot-scope="scope">
                        <el-button name="user_edit" class="editBtn" type="primary" plain size="mini">编辑</el-button>
                        <el-button name="user_reset" class="editBtn" type="primary" plain size="mini">重置密码</el-button>
                    </template>
                </el-table-column>
            </template>
        </PGTable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PGTable from "@/components/PGTable.vue";

const users = ref([])
const searchInput = ref("")

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