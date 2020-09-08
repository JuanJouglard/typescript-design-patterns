import { HttpService, StorageService } from "./service.interface";

export class ClientB {
  httpService;
  storageService;

  constructor() {
    this.httpService = HttpService.getInstance();
    this.storageService = StorageService.getInstance();
  }

  getSomeVariable() {
    return this.httpService.someVariable;
  }
}
