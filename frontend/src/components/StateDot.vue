<template>
    <div>
        <span class="status-dot" style="background: rgb(82, 196, 26)"></span>
        <span>
            {{ stateText }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


const props = defineProps({
    state: {
        type: Number,
        default: 1,
    }
})

const stateText = computed(() => {
    return props.state == 1 ? '在线' : props.state == 3 ? '未分配' : '离线'
})

</script>
<style scoped lang="scss">
.status-dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    vertical-align: middle;
    border-radius: 50%;
}
</style>