<template>
    <div class="container">
        <div class="department">
            <PGTree :data="department"/>
        </div>
        <div class="cluster">
            <PGTable :data="machines" title="机器列表" :showSelect="showSelect">
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
                                        变更部门
                                    </el-button>
                                </el-dropdown-item>
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
                    <el-table-column label="ip">
                        <template v-slot="data">
                            <span title="查看机器详情">
                                {{ data.row.ip }}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="departname" label="部门">
                    </el-table-column>
                    <el-table-column prop="cpu" label="cpu">
                    </el-table-column>
                    <el-table-column label="状态">
                        <template slot-scope="scope">
                            <!-- <state-dot :state="scope.row.state"></state-dot> -->
                        </template>
                    </el-table-column>
                    <el-table-column prop="tags" label="标签">
                    </el-table-column>
                    <el-table-column prop="systeminfo" label="系统">
                    </el-table-column>
                </template>
            </PGTable>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PGTable from "@/components/PGTable.vue";
import PGTree from "@/components/PGTree.vue";

const machines = ref([])
const showSelect = ref(true)

const department = ref<any[]>([])

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;

    .department {
        width: 20%;
        height: 100%;
    }

    .cluster {
        width: 80%;
        height: 100%;
    }
}
</style>