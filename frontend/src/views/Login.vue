<template>
    <div class="login-page">
        <div>
            <img alt="login background" src="../assets/login-bg.png" />
            <div>
                <p>PilotGo运维平台</p>
            </div>

            <el-form :model="loginForm">
                <el-form-item prop="email" label="邮箱">
                    <el-input type="text" v-model="loginForm.email" placeholder="请输入邮箱">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" label="输入密码">
                    <el-input type="password" v-model="loginForm.password" placeholder="请输入密码">
                    </el-input>
                </el-form-item>
            </el-form>
            <el-row>
                <el-button type="primary">
                    登 录
                </el-button>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loginForm = ref({
    email: "",
    password: "",
});

</script>

<style lang="scss">
.login-page {
    height: 100%;
    width: 100%;
    background-image: url(@/assets/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
</style>