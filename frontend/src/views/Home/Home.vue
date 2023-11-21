<template>
    <div class="home">
        <el-container>
            <el-aside width="9%">
                <div class="logo">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <el-menu style="height: 100%;">
                    <sidebar />
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="height:10%">Header</el-header>
                <el-main style="padding: 0px;">
                    <router-view />
                </el-main>
                <div class="footer">
                    <p> <a href="https://gitee.com/openeuler/PilotGo" target="_blank">PilotGo</a> version: {{
                        version.commit ? version.version + "-" + version.commit : version.version }}, build time: {{
        version.build_time }}
                        All right reserved</p>
                </div>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Sidebar from "./components/Sidebar.vue";

import { updateSidebarItems } from "@/router/index";

interface VersionInfo {
    commit?: string
    version?: string
    build_time?: string
}

const version = ref<VersionInfo>({})

onMounted(() => {
    updateSidebarItems();
})

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
        display: flex;
        flex-direction: column;

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

    .footer {
        height: 20px;
        width: 100%;
        line-height: 20px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>