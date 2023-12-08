<template>
    <div>
        <el-tree ref="tree" :data="authData" :show-checkbox="showEdit" node-key="menuName" :check-strictly="strictly"
            :default-expanded-keys="[2, 3]" :default-checked-keys="checkedKeys">
        </el-tree>

        <div class="footer" v-if="showEdit">
            <el-button>取 消</el-button>
            <el-button type="primary">确 定</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import { authData } from "./authData";

const props = defineProps({
    showEdit: {
        type: Boolean,
        default: true,
    }
})

onMounted(() => {

})

const roleData = ref([])
const checkedKeys = ref<string[]>([])
const strictly = ref(true)

</script>

<style lang="scss" scoped>
.footer {
    text-align: right;
}
</style>