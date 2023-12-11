<template>
    <div>
        <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
            <el-form-item label="角色名:" prop="rolename">
                <el-input class="ipInput" type="text" size="medium" v-model="form.rolename" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="描述:" prop="description">
                <el-input class="ipInput" controls-position="right" v-model="form.description"
                    autocomplete="off"></el-input>
            </el-form-item>
        </el-form>

        <div class="footer">
            <el-button type="primary">确 定</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const rules = {
    rolename: [
        {
            required: true,
            message: "请输入角色名",
            trigger: "blur"
        }
    ],
}

const formRef = ref()
const form = ref({
    rolename: "",
    description: ""
})

</script>

<style lang="scss" scoped>
.footer {
    text-align: right;
}
</style>