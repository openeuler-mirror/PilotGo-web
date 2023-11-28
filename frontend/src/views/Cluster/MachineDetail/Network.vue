<template>
    <div class="content">
        <br />
        <h3>IPv4:</h3>
        <br />
        <el-descriptions :column="2" border>
            <el-descriptions-item label="IP分配">{{ net.BOOTPROTO === 'dhcp' ? '动态DHCP' : '手动' }}</el-descriptions-item>
            <el-descriptions-item label="IPv4地址">{{ net.IPADDR }}</el-descriptions-item>
            <el-descriptions-item label="IPv4子网掩码">{{ net.NETMASK || '无' }}</el-descriptions-item>
            <el-descriptions-item label="IPv4网关">{{ net.GATEWAY }}</el-descriptions-item>
            <el-descriptions-item label="IPv4首选DNS">{{ net.DNS1 }}</el-descriptions-item>
            <el-descriptions-item label="IPv4备选DNS">{{ net.DNS2 || '无' }}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const net = ref<any>({})

</script>
<style lang="scss" scoped></style>