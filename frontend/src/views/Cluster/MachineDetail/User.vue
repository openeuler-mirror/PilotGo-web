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
<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .users {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .current {
        width: 20%;
        height: 100%;
        font-weight: bold;
        color: rgb(92, 85, 85);
        border: 1px solid rgb(236, 235, 255);
        background: rgb(236, 235, 255);
        border-radius: 10px;
        display: flex;
        align-items: center;
        svg {
          width: 36%;
          height: 100%;
        }
      }
      .search {
        width: 70%;
      }
    }
    .info {
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
      .title {
        width: 30%;
        margin: 2% 0;
      }
    }
 }
 </style>