<template>
    <div class="container">
        <PGTable :data="batches" title="批次列表" :showSelect="true">
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
                        <el-button name="batch_update" size="mini">
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

const batches = ref([])

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>