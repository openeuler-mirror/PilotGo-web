<template>
    <div>
        <el-form :model="form" :rules="rules" ref="form" label-width="100px">
            <el-form-item label="用户名:" prop="username">
                <el-input class="ipInput" type="text" v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input type="password" class="ipInput" controls-position="right" v-model="form.password"
                    autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="部门:" prop="departName">
                <el-input class="ipInput" controls-position="right" v-model="form.departName" autocomplete="off"></el-input>
                <PGTree style="width: 98%;" :showHeader="false">
                </PGTree>
            </el-form-item>
            <el-form-item label="用户角色:" prop="role">
                <el-select v-model="form.role" multiple placeholder="请选择">
                    <el-option v-for="item in roles" :key="item.id" :label="item.description" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="手机号:" prop="phone">
                <el-input class="ipInput" controls-position="right" v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱:" prop="email">
                <el-input class="ipInput" controls-position="right" v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>

        <div class="dialog-footer">
            <el-button type="primary">确 定</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage } from 'element-plus';

import PGTree from "@/components/PGTree.vue";

import { checkEmail, checkPhone } from "./logic";
import { RespCodeOK } from "@/request/request";
import { getRoles } from '@/request/role';

const rules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
        }],
    password: [
        {
            required: true,
            message: "请输入密码",
            trigger: "blur"
        }],
    departName: [{
        required: true,
        message: "请选择部门",
        trigger: "blur"
    }],
    role: [{
        required: true,
        message: "请选择角色",
        trigger: "blur"
    }],
    phone: [
        {
            validator: checkPhone,
            message: "请输入正确的手机号格式",
            trigger: "change",
        }],
    email: [
        {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
        },
        {
            validator: checkEmail,
            message: "请输入正确的邮箱格式",
            trigger: "change",
        }],
}

const roles = ref<any[]>();

function updateRoles() {
    getRoles().then((resp: any) => {
        if (resp.code === RespCodeOK) {
            roles.value = resp.data
        } else {
            ElMessage.error("failed to get roles info: " + resp.msg)
        }
    }).catch((err) => {
        ElMessage.error("failed to get roles info: " + err.msg)
    })
}

onMounted(() => {
    updateRoles()
})

const form = ref<any>({});

</script>

<style lang="scss" scoped>
.dialog-footer {
    text-align: right;
}
</style>