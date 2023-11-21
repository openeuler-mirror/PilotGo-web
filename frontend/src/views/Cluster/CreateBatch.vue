<template>
    <div class="container">
        <div class="department">
            <PGTree :data="department">
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
            <el-transfer filterable filter-placeholder="请输入关键字" :titles="['备选项', '已选项']" style="width:100%">
                <el-button class="transfer-footer" slot="left-footer" type="primary" plain size="small">重置</el-button>
                <el-button class="transfer-footer" slot="right-footer" type="primary" plain size="small">创建</el-button>
            </el-transfer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PGTree from "@/components/PGTree.vue";

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
        margin-right: 5px;
    }

    .creater {
        width: 80%;
        height: 100%;
    }
}
</style>
