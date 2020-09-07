class InnerHttpService {
  getRequest(): Promise<any> {
    return new Promise(() => {
      console.log("get request");
    });
  }

  post(): Promise<any> {
    return new Promise(() => {
      console.log("get request");
    });
  }
}

class InnerStorageService {
  cache: { [key: string]: string };

  saveToStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getFromStorage(key: string): string {
    return localStorage.getItem(key);
  }
}

export class Singleton {
  _instance;
  InnerService;
  constructor(Service) {
    this.InnerService = Service;
  }

  getInstance() {
    if (!this._instance) this._instance = new this.InnerService();
    return this._instance;
  }
}
export const StorageService = new Singleton(InnerStorageService);
export const HttpService = new Singleton(InnerHttpService);
