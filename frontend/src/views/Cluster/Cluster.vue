<template>
    <div class="container">
    <div class="department">
        <p>department panel</p>
    </div>
    <div class="cluster">
        <p>cluster panel</p>
    </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.container{
    width:100%;
    height:100%;
    display: flex;

    .department {
        width:20%;
        height:100%;
    }

    .cluster {
        width:80%;
        height:100%;
    }
}
</style>