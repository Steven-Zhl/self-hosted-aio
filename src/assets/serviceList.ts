import AList from "@/assets/icons/alist.svg";
import Jellyfin from "@/assets/icons/jellyfin.svg";
import VueTorrent from "@/assets/icons/vuetorrent.svg";
import Stash from "@/assets/icons/stash.svg";

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
  }
]

export default services;