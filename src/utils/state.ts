// 使用pinia存储一些全局属性
import {defineStore} from "pinia";
import {ref} from "vue";

export const useLayoutStore = defineStore('layout', () => {
  const layout = ref<"desktop" | "mobile">("desktop");
  const isDesktop = ref(true);
  const isMobile = ref(false);

  const setLayout = (value: "desktop" | "mobile") => {
    layout.value = value;
    isDesktop.value = value === "desktop";
    isMobile.value = value === "mobile";
  }
  const setWidth = (width: number) => {
    if (width < 768) {
      isDesktop.value = false;
      isMobile.value = true;
      layout.value = "mobile";
    } else if (width >= 768) {
      isDesktop.value = true;
      isMobile.value = false;
      layout.value = "desktop";
    }
  }

  return {
    layout,
    isDesktop,
    isMobile,
    setLayout,
    setWidth
  }
})