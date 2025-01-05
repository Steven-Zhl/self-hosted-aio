<script setup lang="ts">
import {ref} from "vue";
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import {FullScreen} from "@element-plus/icons-vue";

const sideBarVisible = ref(false);
const topBarVisible = ref(true);
</script>

<template>
  <div class="common-layout">
    <el-container class="h-full flex flex-col">
      <transition name="fade">
        <el-header v-if="topBarVisible" class="p-4 md:p-8 sticky top-0 shadow">
          <top-bar @show-side-bar="sideBarVisible=true" @hide-top-bar="topBarVisible=false"/>
        </el-header>
      </transition>

      <el-main class="p-0">
        <side-bar v-model="sideBarVisible"/>

        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component"/>
          </transition>
        </router-view>

        <el-button v-if="!topBarVisible" circle :icon="FullScreen" @click="topBarVisible=true"
                   class="absolute bottom-8 right-8"/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>