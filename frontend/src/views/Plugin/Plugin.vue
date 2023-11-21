<template>
    <div class="container">
        <PGTable :data="plugins" title="插件列表" :showSelect="true">
            <template v-slot:action>
                <el-button type="primary">添加插件</el-button>
                <el-button type="primary">移除</el-button>
            </template>
        </PGTable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PGTable from "@/components/PGTable.vue";

const plugins = ref([])

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>