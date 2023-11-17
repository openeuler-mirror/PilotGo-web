<template>
    <div class="container">
        <div class="header">
            <p>table header</p>
        </div>
        <div class="content">
            <p>table content</p>
        </div>
        <div class="pagination">
            <p>pagination content</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
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