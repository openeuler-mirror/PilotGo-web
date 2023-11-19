<template>
    <p>PGTree</p>
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

<style lang="scss" scoped></style>