<template>
    <div class="container">
        <div class="department">
            <PGTree :data="department">
                <template v-slot:header>
                    <p>部门</p>
                </template>
            </PGTree>
        </div>
        <div class="cluster">
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
                                    <auth-button auth="dept_change" :show="true" @click="showChangeDepartDialog = true">
                                        变更部门
                                    </auth-button>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <auth-button auth="mac_change" :show="true">
                                        删除
                                    </auth-button>
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
                        <template #default="scope">
                            <state-dot :state="scope.row.state"></state-dot>
                        </template>
                    </el-table-column>
                    <el-table-column prop="tags" label="标签">
                    </el-table-column>
                    <el-table-column prop="systeminfo" label="系统">
                    </el-table-column>
                </template>
            </PGTable>
        </div>

        <el-dialog title="主机部门变更" v-model="showChangeDepartDialog">
            <change-depart>
            </change-depart>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage } from 'element-plus';

import AuthButton from "@/components/AuthButton.vue";
import PGTable from "@/components/PGTable.vue";
import PGTree from "@/components/PGTree.vue";
import StateDot from "@/components/StateDot.vue";
import ChangeDepart from "./components/ChangeDepart.vue";

import { getDepartMachines, getSubDepartment } from "@/request/cluster";
import { RespCodeOK } from "@/request/request";


// 部门树
const department = ref([{}])
const departmentID = ref(1)

// 机器列表
const showSelect = ref(true)
const machines = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

const showChangeDepartDialog = ref(false)

onMounted(() => {
    getDepartMachines({
        page: currentPage.value,
        size: pageSize.value,
        DepartId: departmentID.value,
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            total.value = resp.total
            currentPage.value = resp.page
            pageSize.value = resp.size
            machines.value = resp.data
        } else {
            ElMessage.error("failed to get machines overview info: " + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to get machines overview info:" + err.msg)
    })

    getSubDepartment({
        DepartID: departmentID.value,
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            department.value = [resp.data]
        } else {
            ElMessage.error("failed to get department info: " + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to get department info:" + err.msg)
    })
})

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;

    .department {
        width: 20%;
        height: 100%;
        margin-right: 5px;
    }

    .cluster {
        width: 80%;
        height: 100%;
    }
}
</style>