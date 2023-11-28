<template>
    <div class="content">
        <div class="services">
            <el-autocomplete style="width:50%" class="inline-input" v-model="sysctlName"
                placeholder="请输入内核名称"></el-autocomplete>
            <el-button plain type="primary">搜索</el-button>
            <el-button plain type="primary" :disabled="!sysctlName">修改</el-button>
        </div>
        <div class="info">
            <div class="detail" v-if="display">
                <p class="title">内核详情：</p>
                <el-descriptions :column="2" border>
                    <el-descriptions-item label="内核名">{{ sysctlInfo.Name }}</el-descriptions-item>
                    <el-descriptions-item label="参数">{{ sysctlInfo.sysNum }}</el-descriptions-item>

                </el-descriptions>
            </div>
            <div class="result" v-else>
                <p class="title">执行结果：</p>
                <el-descriptions :column="2" border>
                    <el-descriptions-item label="内核名">{{ sysctlName }}</el-descriptions-item>
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

const display = ref(false)
const sysctlName = ref("")
const sysctlInfo = ref<any>({})
const action = ref("")
const result = ref("")


</script>
<style lang="scss" scoped></style>