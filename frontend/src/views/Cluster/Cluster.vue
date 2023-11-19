<template>
    <div class="container">
        <div class="department">
            <p>department panel</p>
        </div>
        <div class="cluster">
            <PGTable :data="machines" title="机器列表"
            :showSelect="showSelect">
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

const machines = ref([])
const showSelect = ref(true)

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