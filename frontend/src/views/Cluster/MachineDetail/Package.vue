<template>
    <div class="content">
        <div class="repo">
            <el-table :data="totalRepo">
                <el-table-column prop="File" label="文件"></el-table-column>
                <el-table-column prop="Enabled" label="enabled"></el-table-column>
                <el-table-column prop="URL" label="repo地址"></el-table-column>
            </el-table>
        </div>
        <div class="packages">
            <el-autocomplete style="width:30%" class="inline-input" v-model="packageName"
                placeholder="请输入内容"></el-autocomplete>
            <auth-button name="default_all">搜索</auth-button>
            <auth-button auth="showOperate" name="rpm_install">安装</auth-button>
            <auth-button auth="showOperate" name="rpm_uninstall">卸载</auth-button>
        </div>
        <div class="info">
            <div class="detail" v-if="display">
                <p class="title">软件包详情：</p>
                <el-descriptions :column="3" border>
                    <el-descriptions-item label="软件包名">{{ rpmInfo.Name }}</el-descriptions-item>
                    <el-descriptions-item label="Version">{{ rpmInfo.Version }}</el-descriptions-item>
                    <el-descriptions-item label="Release">{{ rpmInfo.Release }}</el-descriptions-item>
                    <el-descriptions-item label="Architecture">{{ rpmInfo.Architecture }}</el-descriptions-item>
                    <el-descriptions-item label="说明">{{ rpmInfo.Summary }}</el-descriptions-item>
                </el-descriptions>
            </div>
            <div class="result" v-else>
                <p class="title">执行结果：</p>
                <el-descriptions :column="2" border>
                    <el-descriptions-item label="软件包名">{{ packageName }}</el-descriptions-item>
                    <el-descriptions-item label="执行动作">{{ action }}</el-descriptions-item>
                    <el-descriptions-item label="结果">
                        {{ result + ":" }}
                        <p class="progress" v-show="result != ''">
                            <span
                                :style="{ background: result === '成功' ? 'rgb(109, 123, 172)' : 'rgb(223, 96, 88)' }">100%</span>
                        </p>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import AuthButton from "@/components/AuthButton.vue";

const display = ref(false)
const packageName = ref("")
const totalRepo = ref([])
const rpmInfo = ref<any>({})
const action = ref("")
const result = ref("")

</script>

<style lang="scss"></style>