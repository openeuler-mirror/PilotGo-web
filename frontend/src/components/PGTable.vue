<template>
    <div class="container">
        <div class="header">
            <span>{{ title }}</span>
            <div style="margin-right: 10px;">
                <slot name="action"></slot>
            </div>
        </div>
        <div class="content">
            <el-table :data="props.data">
                <el-table-column type="selection" width="60" align="center" v-if="showSelect" />
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

    showSelect: {
        type: Boolean,
        default: false,
    },
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
        height: 6%;
        border-radius: 6px 6px 0 0;
        background: linear-gradient(to right, rgb(11, 35, 117) 0%, rgb(96, 122, 207) 100%, );
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: #fff;
            margin-left: 10px;
        }

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