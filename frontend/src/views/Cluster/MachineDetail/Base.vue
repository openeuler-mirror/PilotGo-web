<template>
    <div class="content">
        <el-descriptions :column="2" border>
            <el-descriptions-item label="机器IP"> IP </el-descriptions-item>
            <el-descriptions-item label="所属部门"> dept </el-descriptions-item>
            <el-descriptions-item label="监控状态"> status </el-descriptions-item>
            <el-descriptions-item label="系统版本"> macPlatform </el-descriptions-item>
            <el-descriptions-item label="架构"> mackernel </el-descriptions-item>
            <el-descriptions-item label="cpu"> macCPU </el-descriptions-item>
            <el-descriptions-item label="内存"> macMEM </el-descriptions-item>
            <el-descriptions-item label="内核版本"> osVersion </el-descriptions-item>
            <!-- <el-descriptions-item :label="item.device" :span="2" v-for="item in diskData" :key="item.$index">
                <span class="diskMount">{{ "挂载点：" + item.path + "(" + item.total + ")" }}</span>
                <p class="progress">
                    <span :style="{ width: item.used_percent }">{{ item.used_percent }}</span>
                </p>
            </el-descriptions-item> -->
        </el-descriptions>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss"></style>