<script setup lang="ts">
import {ArrowLeft, Menu, Moon, FullScreen, Sunny} from "@element-plus/icons-vue";
import {useRoute, useRouter} from "vue-router";
import {useLayoutStore} from "../utils/state.ts";
import {useDark, useToggle} from '@vueuse/core';

const emit = defineEmits(["showSideBar", "hideTopBar"]);
const router = useRouter();
const route = useRoute();
const layout = useLayoutStore();
const isDark = useDark();
const switchDark = useToggle(isDark);

const showSideBar = () => {
  emit("showSideBar");
}

const hideTopBar = () => {
  emit("hideTopBar")
}

const toBack = () => {
  router.back();
}

</script>

<template>
  <div class="flex h-full justify-between items-center transition-all">
    <div class="flex items-center gap-2 md:gap-4">
      <el-button round circle :icon="ArrowLeft" @click="toBack">
      </el-button>
      {{ route.meta.title }}
    </div>

    <div class="flex items-center gap-2 md:gap-4">
      <el-button-group>
        <el-button round plain :icon="Menu" @click="showSideBar">
          <template #default v-if="layout.isDesktop">
            <el-text>菜单</el-text>
          </template>
        </el-button>
        <el-button round plain :icon="FullScreen" @click="hideTopBar">
          <template #default v-if="layout.isDesktop">
            <el-text>全屏</el-text>
          </template>
        </el-button>
        <el-button round plain :icon="isDark ? Moon : Sunny" @click="switchDark()">
          <template #default v-if="layout.isDesktop">
            <el-text>主题</el-text>
          </template>
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>

<style scoped>

</style>