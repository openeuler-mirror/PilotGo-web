<template>
    <div v-loading="loading" class="panel" style="height:100%">
        <Table :getData="getUsers" ref="table" id="exportTab">
            <template v-slot:table_search>
                <el-input placeholder="请输入邮箱名进行搜索..." prefix-icon="el-icon-search" clearable
                    style="width: 280px;margin-right: 10px;" v-model="emailInput"
                    @keydown.enter.native="getSearchUser"></el-input>
                <el-button icon="el-icon-search" @click="getSearchUser">
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
import { reactive, ref } from 'vue'
const loading = ref(false)
const display = ref(false)
const title = ref('')
const rowData = ref()
const type = ref('')
const emailInput = ref('')
const total = ref(0);
const tableData = ref([]);
const pageSearch = reactive({
    page: 1,
    size: 10
});

const handleEdit = (row: any) => {
    rowData.value = row;
    display.value = true;
    title.value = "编辑用户";
    type.value = "update";
}
const getSearchUser = () => {
    loading.value = true;
    const searchData = { 'email': emailInput.value };
    const pagedData = { ...pageSearch };

    searchUser(searchData, pagedData)
        .then((res) => {
            console.log(res)
            if (res.data.code === 200) {
                loading.value = false;
                total.value = res.data.total;
                pageSearch.page = res.data.page;
                loading.value = false;
                tableData.value = res.data;
            } else {
                loading.value = false;
            }
        })
        .catch((error) => {
            loading.value = false;
            console.error('Error searching user:', error);
        });
};

</script>

<style lang = 'scss' scoped></style>
