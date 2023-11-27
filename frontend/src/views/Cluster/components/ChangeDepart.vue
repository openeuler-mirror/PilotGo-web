<template>
    <div>
        <div>
            <span>已选机器列表</span>
        </div>
        <div>
            <el-table>
                <el-table-column prop="ip" label="ip">
                </el-table-column>
                <el-table-column prop="department" label="原部门">
                </el-table-column>
            </el-table>
            <PGTree :data="department">
                <template v-slot:header>
                    <p>部门</p>
                </template>
            </PGTree>
        </div>
        <div>
            <el-button>取 消</el-button>
            <el-button type="primary">确 定</el-button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import PGTree from "@/components/PGTree.vue";

// 部门树
const department = ref([{}])
const departmentID = ref(1)

</script>

<style lang="scss" scoped></style>