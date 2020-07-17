import { Adapter } from "./adapter.interface";

export class ServiceClient {
  adapter: Adapter;
  constructor(adapter: Adapter) {
    this.adapter = adapter;
  }

  sendPicture() {
    return this.adapter.postrequest("image/upload", { img: "img" });
  }

  getUserInfo() {
    return this.adapter.getrequest("user/info");
  }
}
