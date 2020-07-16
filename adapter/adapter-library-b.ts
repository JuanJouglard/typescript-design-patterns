import { Adapter } from "./adapter.interface";

export class AdapterLibraryB implements Adapter {
  getrequest(api: string): Promise<any> {
    return new Promise((resolve, _) => {
      const response = libraryB.makeRequest("GET", api);
      resolve(response);
    });
  }
  postrequest(api: string, body: any): Promise<any> {
    return new Promise((resolve, _) => {
      const response = libraryB.makeRequest("POST", api, body);
      resolve(response);
    });
  }
}
