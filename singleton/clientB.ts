import { HttpService, StorageService, Service } from "./service.interface";

export class ClientB {
  httpService: Service;
  storageService: Service;

  constructor() {
    this.httpService = HttpService.getInstance();
    this.storageService = StorageService.getInstance();
  }

  getSomeVariable() {
    return this.httpService.someVariable;
  }
}
