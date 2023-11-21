<template>
    <div class="container">
        <PGTable :data="roles" title="角色列表" :showSelect="true">
            <template v-slot:action>
                <el-button type="primary">添加</el-button>
            </template>
        </PGTable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PGTable from "@/components/PGTable.vue";

const roles = ref([])

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>