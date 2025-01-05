<script setup lang="ts">
import services from "../assets/serviceList.ts";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {CircleCheckFilled, CircleCloseFilled, Refresh, WarningFilled} from "@element-plus/icons-vue";
import {ping} from "../utils/request.ts";
import {PingStatus} from "../types/request.ts";

const router = useRouter();

const typeMap = (status: PingStatus) => {
  switch (status) {
    case PingStatus.PENDING:
      return 'info';
    case PingStatus.SUCCESS:
      return 'success';
    case PingStatus.PROBLEM:
      return 'warning';
    case PingStatus.FAILED:
      return 'danger';
  }
}

const iconMap = (status: PingStatus) => {
  switch (status) {
    case PingStatus.SUCCESS:
      return CircleCheckFilled;
    case PingStatus.PROBLEM:
      return WarningFilled;
    case PingStatus.FAILED:
      return CircleCloseFilled;
    default:
      return null;
  }
}

const serviceStatus = ref<{
  [name: string]: PingStatus
}>(services.reduce((acc: { [key: string]: any }, cur) => {
  acc[cur.name] = PingStatus.PENDING;
  return acc;
}, {}));

const toPage = (path: string, query?: any) => {
  router.push({path, query});
}

const refresh = () => {
  serviceStatus.value = services.reduce((acc: { [key: string]: any }, cur) => {
    acc[cur.name] = PingStatus.PENDING;
    return acc;
  }, {});
  pingAll();
}

const pingAll = () => {
  Promise.all(services.map(item => {
    return ping(item.pingUrl ? item.host + item.pingUrl : item.host).then((res) => {
      serviceStatus.value[item.name] = res;
    }).catch(() => {
      serviceStatus.value[item.name] = PingStatus.FAILED;
    })
  }))
}

onMounted(() => {
  pingAll()
})
</script>

<template>
  <div class="p-4 md:p-8 flex flex-col">
    <el-card style="border-radius: 12px" shadow="never">
      <template #header>
        <el-row justify="space-between">
          <el-text size="large">我的服务</el-text>
          <el-button plain circle @click="refresh" :icon="Refresh"/>
        </el-row>
      </template>
      <div class="flex flex-col gap-4 md:grid grid-cols-2 md:gap-8">
        <el-card v-for="item in services" style="border-radius: 12px" shadow="hover" class="cursor-pointer"
                 @click="toPage('/service',{name: item.name})">
          <div class="flex gap-4 md:gap-8 relative">

            <el-button link style="position: absolute; top: 0; right: 0; font-size: 18px"
                       :loading="serviceStatus[item.name]===PingStatus.PENDING"
                       :type="typeMap(serviceStatus[item.name])"
                       :icon="iconMap(serviceStatus[item.name])"/>

            <el-icon :size="60">
              <el-image style="border-radius: 8px; width: 60px; height: 60px" :src="item.icon" :alt="item.name"/>
            </el-icon>

            <div class="flex flex-col flex-1 justify-between">
              <span class="text-base">{{ item.name }}</span>

              <span class="text-sm line-clamp-1" style="color: var(--el-color-primary)">{{ item.host }}</span>
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<style scoped>

</style>