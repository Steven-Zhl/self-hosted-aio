import axios from "axios";
import {PingStatus} from "../types/request.ts";

export async function ping(url: string): Promise<PingStatus> {
  try {
    const resp = await axios.head(url, {
      timeout: 4000, // 设置超时时间，单位为毫秒
    });
    if (resp.status >= 200 && resp.status < 400) {
      return Promise.resolve(PingStatus.SUCCESS);
    } else if (
      resp.status === 401 ||
      resp.status === 407 ||
      resp.status === 415 ||
      resp.status === 416 ||
      resp.status === 417
    ) {
      return Promise.resolve(PingStatus.PROBLEM);
    } else {
      return Promise.resolve(PingStatus.FAILED);
    }
  } catch (error) {
    return Promise.reject(PingStatus.FAILED);
  }
}