<template>
    <div class="ky-table">
        <div class="header">
            <div class="header_content">
                <div class="table_search">
                    <slot name="table_search" :searchData="searchData"></slot>
                </div>
                <div class="table_action">
                    <slot name="table_action"></slot>
                </div>
            </div>
        </div>
        <div class="content" v-loading="loading" element-loading-text="数据加载中" element-loading-spinner="el-icon-loading">
            <el-table height="100%" :header-cell-style="{ color: 'black', 'background-color': '#f6f8fd' }"
                :cell-style="{ color: 'black' }" ref="multipleTable" :data="tableData" tooltip-effect="dark"
                :row-class-name="tableRowClassName" @select="handleSelectionChange" @select-all="handleSelectAll">
                <el-table-column type="selection" v-if="showSelect" width="55" align="center"
                    :selectable="checkSelectTable">
                </el-table-column>
                <slot name="table"></slot>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                v-model:current-page="pageSearch.page" :page-sizes="[10, 20, 25, 50, 75, 100]"
                v-model:page-size="pageSearch.size" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, onMounted, watch, nextTick } from 'vue'

interface SelectRow {
    ids: number[];
    rows: object[];
}
const selectRow = reactive<SelectRow>({
    ids: [],
    rows: []
});
const multipleTableRef = ref();
const expands = ref<string[]>([]);
const checked = ref(false);
const display = ref(false);
const displayTip = ref(false);
const loading = ref(false);
const tableData = ref([]);
const total = ref(0);
const pageSearch = ref({
    page: 1,
    size: 10
});

const props = defineProps([
    'isLoadTable',
    'isSource',
    'getData',
    'getSourceData',
    'showSelect',
    'searchData',
    'treeNodes',
    'isRowClick'
]);
const loadData = async (pageParams: any) => {
    tableData.value = [];
    loading.value = true;

    try {
        const response = await props.getData({ ...pageParams, ...props.searchData });
        const res = response;
        if (res.code === 200) {
            loading.value = false;
            total.value = res.total;
            pageSearch.value.page = res.page;
            loading.value = false;
            tableData.value = res.data;
        } else {
            loading.value = false;
        }
    } catch (error) {
        console.log('get data error:', error);
    }
};

const getSData = async (data: any) => {
    tableData.value = [];

    try {
        const response = await props.getSourceData(data);
        const res = response;

        if (res.code === 200) {
            total.value = res.total;
            pageSearch.value.page = res.page;
            loading.value = false;
            tableData.value = res.data;
        } else {
            loading.value = false;
        }
    } catch (error) {
        console.error('get source data error:', error);
    }
};

const handleSetTableData = (datas: any) => {
    loading.value = false;
    tableData.value = datas;
};

const handleSizeChange = (newSize: number) => {
    pageSearch.value.size = newSize;
    loadData({ ...pageSearch.value });
};

const handleCurrentChange = (newPage: number) => {
    pageSearch.value.page = newPage;
    loadData(pageSearch.value);
};

const handleSelectionChange = (selection: any, row: any) => {
    const index = selectRow.ids.indexOf(row.ID || row.machineuuid);

    if (index < 0) {
        selectRow.ids.push(row.ID || row.machineuuid || row.id);
        selectRow.rows.push(row);
    } else {
        selectRow.ids.splice(index, 1);
        selectRow.rows.splice(index, 1);
    }
};

const handleSelectAll = (selection: any) => {
    if (selection.length === 0) {
        selectRow.ids = [];
        selectRow.rows = [];
    } else {
        selection.forEach((item: any) => {
            selectRow.ids.push(item.ID);
            selectRow.rows.push(item);
        });
    }
};


const tableRowClassName = ({ row, rowIndex }: any) => {
    // rowIndex备用，隔行显示颜色不同的时候用
    if (props.isRowClick) {
        return ['row-expand'];
    }
};

const checkSelectTable = () => {
    return props.treeNodes.length === 0;
};

onMounted(() => {
    loadData({ ...pageSearch.value });
});

watch(() => props.isSource, (newV, oldV) => {
    nextTick(() => {
        if (newV) {
            getSData({ ...pageSearch.value, page: 1 });
        }
    });
});
</script>

<style lang = 'scss' scoped>
.ky-table {
    height: 96%;

    .header {
        width: 100%;
        height: 6%;
        border-radius: 6px 6px 0 0;
        background: linear-gradient(to right, rgb(11, 35, 117) 0%, rgb(96, 122, 207) 100%, );

        .header_content {
            height: 100%;
            margin: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
        }
    }

    .content {
        height: 92%;
        overflow-y: auto;
    }

    .el-table {
        .line-color {
            background-color: #fff;
        }

        th,
        td {
            text-align: center;
        }

        .el-checkbox__input.is-checked .el-checkbox__inner,
        .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            background-color: rgb(82, 108, 193);
            border-color: rgb(82, 108, 193)
        }
    }

    .pagination {
        .el-pagination {
            text-align: right;
            /* border: 1px solid #ccc; */
            border-top: 0px;
            padding-top: 5px;
            padding-bottom: 5px;
            border-top: 0px;

            .el-pagination__sizes,
            .el-pagination__total {
                float: left;
            }
        }
    }
}
</style>
