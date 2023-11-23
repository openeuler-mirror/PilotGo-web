<template>
    <div class="container">
        <PGTable :data="plugins" title="插件列表" :showSelect="true">
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
import { ref } from "vue";
import PGTable from "@/components/PGTable.vue";

const plugins = ref([])

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>