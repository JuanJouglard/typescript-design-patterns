import { Adapter } from "./adapter.interface";

export class AdapterLibraryA implements Adapter {
  getrequest(api: string): Promise<any> {
    return new Promise((resolve, _) => {
      libraryA.connection();
      libraryA.authentication();
      libraryA.sendGetHttpRequest(api);
      const response = libraryA.receiveResponse();
      resolve(response);
    });
  }

  postrequest(api: string, body: any): Promise<any> {
    return new Promise((resolve, _) => {
      libraryA.connection();
      libraryA.authentication();
      libraryA.sendPostHttpRequest(api, body);
      const response = libraryA.receiveResponse();
      resolve(response);
    });
  }
}
