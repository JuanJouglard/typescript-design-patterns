import { Adapter } from "./adapter.interface";

export class ServiceClient {
  service: Adapter;
  constructor(service: Adapter) {
    this.service = service;
  }

  sendPicture() {
    return this.service.postrequest("image/upload", { img: "img" });
  }

  getUserInfo() {
    return this.service.getrequest("user/info");
  }
}
