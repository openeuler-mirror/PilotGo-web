<template>
    <el-form :model="formData" label-width="100px">
        <el-form-item label="批次名称" prop="name">
            <el-input class="ipInput" type="text" v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="description">
            <el-input class="ipInput" type="text" v-model="formData.description" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div>
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const formData = ref<any>({})

</script>

<style lang="scss" scoped></style>