<template>
    <div class="container">
        <div class="selector">
            <div style="width: 50%;">
                <div>
                    <span>已选机器列表</span>
                </div>
                <el-table>
                    <el-table-column prop="ip" label="ip">
                    </el-table-column>
                    <el-table-column prop="department" label="原部门">
                    </el-table-column>
                </el-table>
            </div>
            <PGTree class="tree" :data="department">
                <template v-slot:header>
                    <p>部门</p>
                </template>
            </PGTree>
        </div>
        <div class="footer">
            <el-button>取 消</el-button>
            <el-button type="primary">确 定</el-button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ElMessage } from 'element-plus';

import { getSubDepartment } from "@/request/cluster";
import { RespCodeOK } from "@/request/request";

import PGTree from "@/components/PGTree.vue";

// 部门树
const department = ref([{}])
const departmentID = ref(1)

onMounted(() => {
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
    display: flex;
    flex-direction: column;

    .selector {
        height: 500px;
        width: 100%;
        display: flex;
    }

    .tree {
        width: 100%;
        margin-left: 5px;
    }

    .footer {
        display: flex;
        justify-content: end;
    }
}
</style>