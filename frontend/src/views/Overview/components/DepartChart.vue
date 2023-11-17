<template>
    <div id="department-chart" style="width:100%;height:100%">
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chart = ref<any>();
const option = ref({
    title: {
        text: '各部门机器数量',
        ariaLabel: '图例',
    },
    tooltip: {
        show: true,
    },
    legend: {
        show: true,
        data: ["在线", "离线", "未分配"]
    },
    xAxis: {
        type: 'category',
        data: [],
    },
    yAxis: {
        type: 'value'
    },
    grid: {
        left: 50,
        right: 40,
        bottom: 20
    },
    series: [
        {
            name: '在线',
            data: [],
            type: 'bar',
            itemStyle: {
                color: 'rgb(92, 123, 217)',
                borderRadius: [9, 9, 0, 0]
            },
            label: {
                show: true,
                position: 'inside'
            },
        },
        {
            name: '离线',
            data: [],
            type: 'bar',
            itemStyle: {
                color: 'rgb(202, 205, 210)',
                borderRadius: [9, 9, 0, 0]
            },
            label: {
                show: true,
                position: 'inside'
            },
        },
        {
            name: '未分配',
            data: [],
            type: 'bar',
            itemStyle: {
                color: 'rgb(253, 190, 0)',
                borderRadius: [9, 9, 0, 0]
            },
            label: {
                show: true,
                position: 'inside'
            },
        },
    ]
})

onMounted(() => {
    chart.value = echarts.init(document.getElementById("department-chart"))
    chart.value.setOption(option.value)
})

</script>

<style lang="scss"></style>