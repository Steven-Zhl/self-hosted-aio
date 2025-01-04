<script setup lang="ts">
import {useLayoutStore} from "../utils/state.ts";
import {House, MoreFilled, Setting} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import services from "../assets/serviceList";

const router = useRouter();
const layout = useLayoutStore();

const visible = defineModel({
  type: Boolean,
  default: false
});

const toPage = (path: string, query?: any) => {
  router.push({path, query});
  visible.value = false;
}
</script>

<template>
  <el-drawer :direction="layout.isDesktop?'ltr':'ttb'" v-model="visible" :show-close="false"
             :with-header="false" :size="layout.isDesktop?'30%':'auto'">
    <el-menu style="border: 0">
      <el-menu-item index="home" @click="toPage('/')">
        <el-text>
          <el-icon>
            <House/>
          </el-icon>
          首页
        </el-text>
      </el-menu-item>

      <el-sub-menu index="menu">
        <template #title>

          <el-text>
            <el-icon>
              <MoreFilled/>
            </el-icon>
            服务
          </el-text>
        </template>

        <el-menu-item
            v-for="item in services"
            :index="item.name"
            @click="toPage('/service',{name: item.name})">
          <el-text>
            <el-icon>
              <el-image :src="item.icon" :alt="item.name"/>
            </el-icon>
            {{ item.name }}
          </el-text>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="settings" @click="toPage('/settings')">
        <el-text>
          <el-icon>
            <Setting/>
          </el-icon>
          设置
        </el-text>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<style lang="scss">
:deep(.el-drawer__body) {
  padding: 0;
}
</style>