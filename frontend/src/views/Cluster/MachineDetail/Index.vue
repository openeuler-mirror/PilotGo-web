<template>
    <div class="content">
        <el-tabs v-model="activePane">
            <el-tab-pane name="base" label="机器信息">
                <Base />
            </el-tab-pane>
            <el-tab-pane name="user" label="用户信息"> 用户信息 </el-tab-pane>
            <el-tab-pane name="service" label="服务信息"> 服务信息 </el-tab-pane>
            <el-tab-pane name="network" label="网络配置"> 网络配置 </el-tab-pane>
            <el-tab-pane name="systl" label="内核参数"> 内核参数 </el-tab-pane>
            <el-tab-pane name="npm" label="软件包"> 软件包 </el-tab-pane>
            <el-tab-pane name="terminal" label="远程终端"> 远程终端 </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import Base from "./Base.vue";

const activePane = ref("base")


</script>

<style lang="scss" scoped></style>