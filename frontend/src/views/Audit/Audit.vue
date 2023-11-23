<template>
    <div class="container">
        <PGTable :data="logs" title="审计日志" :showSelect="true">
            <template v-slot:content>
                <el-table-column prop="action" label="日志名称">
                </el-table-column>
                <el-table-column prop="user_id" label="创建者">
                </el-table-column>
                <el-table-column label="进度">
                    <template #default="scope">
                        <el-progress style="width: 100%" type="line">
                        </el-progress>
                    </template>
                </el-table-column>
                <el-table-column prop="CreatedAt" label="创建时间" sortable>
                    <template #default="scope">
                        <span>{{ scope.row.CreatedAt }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="operation" label="详情">
                    <template #default="scope">
                        <el-button size="small" type="primary">
                            查看
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="message" label="日志">
                </el-table-column>
            </template>
        </PGTable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PGTable from "@/components/PGTable.vue";

const logs = ref([])

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;

    .search {
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .el-button {
        margin-left: 5px;
    }

}
</style>