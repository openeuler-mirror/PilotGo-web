<template>
    <div>
        <div class="header">
            <slot name="header"></slot>
        </div>
        <el-tree :data="department" :props="defaultProps" :show-checkbox="selectable" @node-click="onNodeClicked"
            :allow-drag="allowDrag" :draggable="dragable"></el-tree>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ElMessage } from 'element-plus';

import { getSubDepartment } from "@/request/cluster";
import { RespCodeOK } from "@/request/request";

const props = defineProps({
    defaultProps: {
        type: Object,
        default: {
            children: 'children',
            label: 'label',
        }
    },

    // 是否可选择节点
    selectable: {
        type: Boolean,
        default: false,
    },
    // 是否可拖拽
    dragable: {
        type: Boolean,
        default: false,
    },
    onNodeClicked: {
        type: Function
    }
})

// 部门树
const department = ref([{}])
const departmentID = ref(1)

onMounted(() => {
    getSubDepartment({
        DepartID: departmentID.value,
    }).then((resp: any) => {
        if (resp.code === RespCodeOK) {
            department.value = [resp.data]
        } else {
            ElMessage.error("failed to get department info: " + resp.msg)
        }
    }).catch((err: any) => {
        ElMessage.error("failed to get department info:" + err.msg)
    })
})

function allowDrag() {
    return props.dragable
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 42px;
    font-weight: bold;
    color: #fff;
    background: rgb(45, 69, 153);
    border-radius: 6px 6px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>