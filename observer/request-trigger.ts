import { Emitter } from "./emmiter.interface";

export class RequestTrigger implements Emitter {
  consumers: ((response: any) => any)[];

  emitNewValue(newValue: any) {
    this.consumers.forEach((consumer) => {
      consumer(newValue);
    });
  }

  registerNewConsumer(callback: (param: any) => any) {
    this.consumers.push(callback);
  }
}
