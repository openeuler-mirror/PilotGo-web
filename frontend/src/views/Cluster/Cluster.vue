<template>
    <div class="container">
    <div class="department">
        <p>department panel</p>
    </div>
    <div class="cluster">
        <PGTable></PGTable>
    </div>
    </div>
</template>

<script lang="ts" setup>
import PGTable from "@/components/PGTable.vue"
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