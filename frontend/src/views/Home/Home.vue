<template>
    <div class="home">
        <el-container>
            <el-aside width="9%">
                <div class="logo">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <el-menu>
                    <sidebar/>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="height:10%">Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
</script>


<style lang="scss">
.home {
    width: 100%;
    height: 100%;
}

.el-container {
    height: 100%;
    width: 100%;

    .el-aside {
        height: 100%;

        .logo {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
            background-color: #fff;
            border-right: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;

            img {
                height: 90%;
            }
        }
    }
}
</style>