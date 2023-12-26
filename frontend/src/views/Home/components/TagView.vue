<template>
    <div class="tags-view-wrapper">
        <div v-for="tag in tagviewStore().taginfos" class="tag">
            <router-link ref="tag" :key="tag.path" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullpath }"
                class="tags-view-item">
                {{ tag.title }}

                <!-- <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" /> -->
                <el-icon>
                    <Delete />
                </el-icon>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

import { tagviewStore, type Taginfo } from '@/stores/tagview';

const route = useRoute()

watch(() => route.path, () => {
    // 避免添加重复tagview
    for (let i = 0; i < tagviewStore().taginfos.length; i++) {
        if (tagviewStore().taginfos[i].path === route.path) {
            return
        }
    }
    tagviewStore().taginfos.push({
        path: route.path,
        title: route.name as string,
        fullpath: route.fullPath,
        query: route.query,
        meta: route.meta,
    })
})
</script>

<style lang="scss" scoped>
.tags-view-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .tags-view-item {
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
    }

}
</style>