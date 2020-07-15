import { Command } from "./command.interface";

export class HttpRequestCommand implements Command {
  execute(): Promise<any> {
    return new Promise((resolve, _) => {
      console.log("Perform an http request");
      resolve("response");
    });
  }
}

export class HttpRequestCommanWithDebounceTime implements Command {
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
