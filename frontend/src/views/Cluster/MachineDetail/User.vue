<template>
    <div class="content">
        <div class="users">
            <div class="current">
                当前用户： currentUser
            </div>
            <div class="search">
                <el-autocomplete style="width:50%" class="inline-input" v-model="userName"
                    placeholder="请输入用户名"></el-autocomplete>
                <el-button plain type="primary">搜索</el-button>
            </div>
        </div>
        <div class="info">
            <p class="title">用户信息详情：</p>
            <el-descriptions :column="3" border>
                <el-descriptions-item label="用户名"> Username </el-descriptions-item>
                <el-descriptions-item label="用户ID"> UserId </el-descriptions-item>
                <el-descriptions-item label="用户组ID"> GroupId </el-descriptions-item>
                <el-descriptions-item label="家目录"> HomeDir </el-descriptions-item>
                <el-descriptions-item label="shell类型"> ShellType </el-descriptions-item>
                <el-descriptions-item label="描述"> Description </el-descriptions-item>
            </el-descriptions>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const userName = ref("")

</script>
<style lang="scss" scoped></style>