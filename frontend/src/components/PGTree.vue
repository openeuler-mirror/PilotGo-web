<template>
    <div class="header">
        <slot name="header"></slot>
    </div>
    <el-tree :data="data" :props="defaultProps"></el-tree>
</template>

<script lang="ts" setup>

const props = defineProps({
    data: Array,
    defaultProps: {
        type: Object,
        default: {
            children: 'children',
            label: 'label',
        }
    },
})

</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 42px;
    font-weight: bold;
    color: #fff;
    background: rgb(45, 69, 153);
    border-radius: 6px 6px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>