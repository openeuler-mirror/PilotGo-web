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
            <PGTree class="tree">
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
import { onMounted } from "vue";

import PGTree from "@/components/PGTree.vue";

onMounted(() => {
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
        width: 50%;
        margin-left: 5px;
    }

    .footer {
        display: flex;
        justify-content: end;
    }
}
</style>