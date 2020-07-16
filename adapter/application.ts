import { ServiceClient } from "./service.client";
import { AdapterLibraryA } from "./adapter-library-a";
import { AdapterLibraryB } from "./adapter-library-b";

export class Application {
  serviceWithLibraryA: ServiceClient;
  serviceWithLibraryB: ServiceClient;

  constructor() {
    this.serviceWithLibraryA = new ServiceClient(new AdapterLibraryA());
    this.serviceWithLibraryB = new ServiceClient(new AdapterLibraryB());
  }
}
