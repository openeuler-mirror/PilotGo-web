<template>
    <el-button type="primary" plain v-if="showBtn" :disabled="disabled">
        <slot></slot>
    </el-button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    auth: {
        type: String,
    },
    // 是否在未授权情况下显示按钮
    show: {
        type:Boolean,
        default: false,
    }
})

const showBtn = computed(() => {
    // TODO: 
    return true
})
// 控制是否使能按钮
const disabled = computed(() => {
    // TODO: 
    return false
})

</script>

<style scoped lang="scss">
</style>