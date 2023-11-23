<template>
    <div class="container">
        <PGTable :data="plugins" title="插件列表" :showSelect="true" :total="total" :currentPage="currentPage">
            <template v-slot:action>
                <el-button type="primary">添加插件</el-button>
                <el-button type="primary">移除</el-button>
            </template>
            <template v-slot:content>
                <el-table-column prop="name" label="名称" width="150">
                </el-table-column>
                <el-table-column prop="version" label="版本" width="150">
                </el-table-column>
                <el-table-column prop="description" label="概述" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="url" label="服务端地址" width="250">
                </el-table-column>
                <el-table-column prop="enabled" label="状态" width="150">
                    <template #default="scope">
                        <span>{{ scope.row.enabled === 0 ? '已禁用' : '已启用' }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right">
                    <template #default="scope">
                        <el-button size="mini" type="primary" plain name="default_all">
                            {{ scope.row.enabled === 1 ? '禁用' : '启用' }}
                        </el-button>
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

import { getPluginsPaged } from "@/request/plugin";
import { RespCodeOK } from "@/request/request";

const plugins = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

onMounted(() => {
    getPluginsPaged({
        page: currentPage.value,
        size: pageSize.value,
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            total.value = resp.total
            currentPage.value = resp.page
            pageSize.value = resp.size
            plugins.value = resp.data
        } else {
            ElMessage.error("failed to get plugins: " + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to get plugins:" + err.msg)
    })
})

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>