import { HttpService, StorageService } from "./service.interface";

export class ClientA {
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
