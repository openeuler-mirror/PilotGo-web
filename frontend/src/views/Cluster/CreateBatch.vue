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
                    <el-input class="ipInput" type="text" size="medium"
                        autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="描述:" prop="description">
                    <el-input class="ipInput" type="text" size="medium"
                        autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
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
