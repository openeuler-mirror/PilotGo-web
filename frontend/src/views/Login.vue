<template>
    <div class="login-page">
        <div class="login-form-bg">
            <img alt="login background" src="../assets/login-bg.png" />
            <div class="login-form">
                <div class="login-title">
                    <p>PilotGo运维平台</p>
                    <span>账户登录</span>
                </div>

                <el-form :model="loginForm" status-icon class="form">
                    <el-form-item class="form-item" prop="email" label="邮箱">
                        <el-input class="form-item-input" type="text" v-model="loginForm.email" placeholder="请输入邮箱">
                        </el-input>
                    </el-form-item>
                    <el-form-item class="form-item" prop="password" label="输入密码">
                        <el-input class="form-item-input" type="password" v-model="loginForm.password" placeholder="请输入密码">
                        </el-input>
                    </el-form-item>
                </el-form>
                <el-row class="form-btn">
                    <el-button class="btn" type="primary">
                        登 录
                    </el-button>
                </el-row>
            </div>
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

    .login-form-bg {
        width: 800px;
        height: 440px;
        background-image: linear-gradient(#248ae4, #17b0f8);
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -220px;
        margin-left: -400px;


        img {
            width: 330px;
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 70px;
            margin-left: 60px;
        }

        .login-form {
            position: absolute;
            top: 0;
            right: 0;
            background: #f4f4f4;
            width: 360px;
            height: inherit;
            border-radius: 10px;

            .login-title {
                margin: 20px auto;
                width: 260px;

                p {
                    font-size: 30px;
                    margin: 10px auto;
                }

                span {
                    font-size: 24px;
                }
            }

            .form {
                width: 260px;
                margin: 0 auto;

                .form-item {
                    display: block;

                    .form-item-input {
                        background: transparent;

                        .el-input__inner {
                            border: none;
                            background: transparent;
                            border-bottom: 1px solid #14b8fd;
                            border-radius: 0;
                        }
                    }
                }
            }

            .form-btn {
                color: #fff;
                width: 150px;
                margin: 0 auto 5px auto;

                .btn {
                    width: 150px;
                    border-radius: 40px;
                    margin-top: 26px;
                }
            }

            .form-register {
                color: #867d7d;
                font-size: 14px;
                width: 150px;
                float: right;
            }
        }
    }
}
</style>