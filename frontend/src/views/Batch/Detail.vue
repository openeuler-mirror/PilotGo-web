<template>
    <PGTable :data="machines" title="机器列表" :showSelect="showSelect" :total="total" :currentPage="currentPage">
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
                                rpm下发
                            </el-button>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-button>
                                rpm卸载
                            </el-button>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </template>
        <template v-slot:content>
            <el-table-column label="ip">
                <template v-slot="data">
                    <span title="查看机器详情">
                        {{ data.row.ip }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="cpu" label="cpu">
            </el-table-column>
            <el-table-column label="状态">
                <template #default="scope">
                    <state-dot :state="scope.row.state"></state-dot>
                </template>
            </el-table-column>
            <el-table-column prop="systeminfo" label="系统">
            </el-table-column>
        </template>
    </PGTable>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import PGTable from "@/components/PGTable.vue";
import StateDot from "@/components/StateDot.vue";


// 机器列表
const showSelect = ref(true)
const machines = ref([])
const currentPage = ref(1)
// const pageSize = ref(10)
const total = ref(0)
</script>

<style lang="scss" scoped></style>