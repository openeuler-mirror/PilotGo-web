<template>
    <div class="container">
        <PGTable :data="batches" title="批次列表" :showSelect="true" :total="total" :currentPage="currentPage">
            <template v-slot:action>
                <el-dropdown>
                    <el-button type="primary">
                        操作 <el-icon>
                            <ArrowDown />
                        </el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>
                                <el-button>
                                    删除
                                </el-button>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </template>
            <template v-slot:content>
                <el-table-column label="批次名称">
                    <template #default="scope">
                        <router-link :to="$route.path + scope.row.ID">
                            {{ scope.row.name }}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="manager" label="创建者">
                </el-table-column>
                <el-table-column prop="DepartName" label="部门">
                </el-table-column>
                <el-table-column prop="CreatedAt" label="创建时间" sortable>
                    <template #default="scope">
                        <!-- <span>{{ scope.row.CreatedAt | dateFormat }}</span> -->
                    </template>
                </el-table-column>
                <el-table-column prop="description" label="备注">
                </el-table-column>
                <el-table-column prop="operation" label="操作">
                    <template #default="scope">
                        <el-button name="batch_update" size="small">
                            编辑
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
import { ElMessage } from 'element-plus';

import { RespCodeOK } from "@/request/request";
import {getBatches} from '@/request/batch';

const batches = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

getBatches({
        page: currentPage.value,
        size: pageSize.value,
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            total.value = resp.total
            batches.value = resp.data
        } else {
            ElMessage.error("failed to get batch info: " + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to get batch info:" + err.msg)
    })

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>