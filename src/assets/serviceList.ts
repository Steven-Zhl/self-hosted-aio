import AList from "@/assets/icons/alist.svg";
import Jellyfin from "@/assets/icons/jellyfin.svg";
import VueTorrent from "@/assets/icons/vuetorrent.svg";
import VitePress from "@/assets/icons/vitepress.svg";
import Vuejs from "@/assets/icons/vuejs.svg";

export interface ServiceType {
  name: string
  icon: string
  host: string
  pingUrl?: string
}

const services: ServiceType[] = [
  {
    name: "Jellyfin",
    icon: Jellyfin,
    host: "http://localhost:8096",
    pingUrl: "/web"
  },
  {
    name: "AList",
    icon: AList,
    host: "http://localhost:5244"
  },
  {
    name: "VueTorrent",
    icon: VueTorrent,
    host: "http://localhost:12138"
  },
  {
    name: "Vue.js",
    icon: Vuejs,
    host: "http://localhost:3000"
  },
  {
    name: "VitePress",
    icon: VitePress,
    host: "http://localhost:5173"
  }
]

export default services;