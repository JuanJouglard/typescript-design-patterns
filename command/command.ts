import { Command } from "./command.interface";

export class HttpRequestCommand implements Command {
  execute(): Promise<any> {
    return new Promise((resolve, _) => {
      console.log("Perform an http request");
      resolve("response");
    });
  }
}

export class HttpRequestCommandWithDebounceTime implements Command {
  debounceTime: number;
  callId: number;
  constructor(debounceTime: number) {
    this.debounceTime = debounceTime;
  }

  execute(): Promise<any> {
    return new Promise((resolve, _) => {
      clearTimeout(this.callId);
      this.callId = setTimeout(() => {
        console.log("Perform an http request");
        resolve("response");
      }, this.debounceTime);
    });
  }
}
export class SaveToStorageCommand implements Command {
  data: any;

  constructor(data: any) {
    this.data = data;
  }

  execute(): Promise<any> {
    return new Promise((resolve, _) => {
      console.log(this.data);
      console.log("Save to LocalStorage");
      resolve("response");
    });
  }
}

export class SaveToDatabaseCommand implements Command {
  data: any;

  constructor(data: any) {
    this.data = data;
  }

  execute(): Promise<any> {
    return new Promise((resolve, _) => {
      console.log(this.data);
      console.log("Save to Database");
      resolve("response");
    });
  }
}
