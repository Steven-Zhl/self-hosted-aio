<script setup lang="ts">
import {useRoute} from "vue-router";
import services, {ServiceType} from "../assets/serviceList";
import {ElMessage} from "element-plus";
import {computed} from "vue";

const route = useRoute();
const service = computed(() => {
  return services.find((item: ServiceType) => item.name === route.query?.name);
})

if (!service) {
  ElMessage.error("服务不存在");
}
</script>

<template>
  <div class="w-full h-full">
    <iframe :src="service?.host" allow="cross-origin-isolated" width="100%" height="100%"/>
  </div>
</template>

<style scoped>

</style>