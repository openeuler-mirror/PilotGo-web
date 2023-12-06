<template>
    <div>
        <el-form :model="form" ref="formRef" label-width="100px">
            <el-form-item label="用户名:" prop="username">
                <el-input class="ipInput" type="text" size="medium" :disabled="disabled" v-model="form.username"
                    autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="部门:" prop="departName">
                <el-input class="ipInput" controls-position="right" :disabled="disabled" v-model="form.departName"
                    autocomplete="off"></el-input>
                <PGTree style="width: 98%;" :showHeader="false" :showEdit="false" ref="tree">
                </PGTree>
            </el-form-item>
            <el-form-item label="手机号:" prop="phone">
                <el-input class="ipInput" controls-position="right" v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱:" prop="email">
                <el-input class="ipInput" controls-position="right" v-model="form.email" autocomplete="off"
                    :disabled="disabled"></el-input>
            </el-form-item>
        </el-form>

        <div class="dialog-footer">
            <el-button type="primary">确 定</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import PGTree from "@/components/PGTree.vue";

const disabled = ref(true)

const formRef = ref()
const form = ref<any>({
    userName: "",
    password: "",
    phone: "",
    email: "",
    departName: "",
    departId: "",
    departPid: "",
    role: "",
});

</script>

<style lang="scss" scoped>
.dialog-footer {
    text-align: right;
}
</style>