<template>
  <div>
    <template v-for="item in routes">
      <router-link :to="item.path">
        <el-menu-item :index="item.panel">
          <component class="sidebar_icon" :is="item.icon"></component>
          <template #title>
            <span style="padding-left: 2px;">{{ item.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import { routerStore, type Menu } from "@/stores/router";

let routes = ref<Menu[]>([]);

onMounted(() => {
  routes.value = routerStore().menus
});

watchEffect(() => {
  routes.value = routerStore().menus
})
</script>

<style lang="scss" scoped></style>