<template>
    <div class="container">
        <div class="department">
            <PGTree :onNodeClicked="onNodeClicked">
                <template v-slot:header>
                    <p>部门</p>
                </template>
            </PGTree>
        </div>
        <div class="creater">
            <el-form label-width="100px">
                <el-form-item label="批次名称:" prop="batchName">
                    <el-input class="ipInput" type="text" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="描述:" prop="description">
                    <el-input class="ipInput" type="text" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <el-transfer class="transfer" filterable filter-placeholder="请输入关键字" :titles="['备选项', '已选项']"
                :data="nodeMachines" v-model="selectedMachines">
                <template #left-footer>
                    <el-button type="primary">重置</el-button>
                </template>
                <template #right-footer>
                    <el-button type="primary">创建</el-button>
                </template>
            </el-transfer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, toRaw, onMounted } from "vue";
import { ElMessage } from 'element-plus';

import PGTree from "@/components/PGTree.vue";

onMounted(() => {
})

import { getDepartMachines } from "@/request/cluster";
import { RespCodeOK } from "@/request/request";

const nodeMachines = ref<any[]>([])
const selectedMachines = ref<any[]>()


function onNodeClicked(node: any) {
    let nodeInfo = toRaw(node)
    console.log("node clicked", nodeInfo)

    getDepartMachines({
        DepartId: nodeInfo.id,
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            nodeMachines.value = []
            console.log("machines:", resp.data)
            resp.data.forEach((item: any) => {
                nodeMachines.value.push({
                    key: item.uuid,
                    label: item.ip,
                    disabled: false,
                })
            });
        } else {
            ElMessage.error("failed to get department machines: " + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to get department machines:" + err.msg)
    })
}

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

    .creater {
        width: 80%;
        height: 100%;

        .transfer {
            width: 100%;
            height: 80%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            :deep(.el-transfer-panel) {
                width: 40%;
                height: 100%;

                .el-transfer-panel__body {
                    height: 80%;
                }

                .el-transfer-panel__footer {
                    text-align: center;
                }
            }
        }
    }
}
</style>
