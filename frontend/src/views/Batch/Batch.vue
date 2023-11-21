<template>
    <div class="container">
        <PGTable :data="batches" title="批次列表" :showSelect="true">
            <template v-slot:action>
                <el-dropdown>
                    <el-button type="primary">
                        操作 <el-icon>
                            <ArrowDown />
                        </el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>
                                <el-button>
                                    删除
                                </el-button>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </template>
        </PGTable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PGTable from "@/components/PGTable.vue";

const batches = ref([])

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>