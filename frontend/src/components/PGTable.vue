<template>
    <div class="container">
        <div class="header">
            <span>{{ title }}</span>
            <div>
                <slot name="search"></slot>
            </div>
            <div>
                <slot name="action"></slot>
            </div>
        </div>
        <div class="content">
            <el-table :data="props.data">
                <el-table-column type="selection" width="60" align="center" />
                <slot name="content"></slot>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination layout="prev, pager, next" :total="total" :page-sizes="[10, 20, 50, 100]"
                @current-change="onPageChanged">
            </el-pagination>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    title: String,

    showSelect: Boolean,
    data: Array,

    total: {
        type: Number,
        default: 0,
    },
    onPageChanged: {
        type: Function,
    }
})


</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .header {
        width: 100%;
        height: 200px;
    }

    .content {
        width: 100%;
        height: 100%;
    }

    .pagination {
        width: 100%;
        height: 40px;

    }
}
</style>