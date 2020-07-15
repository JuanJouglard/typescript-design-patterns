export abstract class Service {
  static instance: Service;

  static getInstance() {
    if (!this.instance) this.instance = this.createInstance();
    return this.instance;
  }
  static createInstance(): Service {
    return null;
  }
}

export class HttpService extends Service {
  createInstance() {
    return new HttpService();
  }

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

export class StorageService extends Service {
  cache: { [key: string]: string };

  createInstance(): StorageService {
    return new StorageService();
  }

  saveToStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getFromStorage(key: string): string {
    return localStorage.getItem(key);
  }
}
