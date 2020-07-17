import { Emitter } from "./emmiter.interface";

export class RequestTrigger implements Emitter {
  consumers: ((response: any) => any)[];
  dataGenerator: any;

  emitNewValue() {
    const newValue = this.dataGenerator.getNewValue();
    this.consumers.forEach((consumer) => {
      consumer(newValue);
    });
  }

  registerNewConsumer(callback: (param: any) => any) {
    this.consumers.push(callback);
  }
}
