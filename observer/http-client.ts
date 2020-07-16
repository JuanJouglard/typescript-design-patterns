import { Consumer } from "./consumer.interface";
import { Emitter } from "./emmiter.interface";

export class HttpClient implements Consumer {
  valueEmitter: Emitter;
  constructor(valueEmitter: Emitter) {
    this.valueEmitter = valueEmitter;
  }

  consumeValue() {
    this.valueEmitter.registerNewConsumer((response: any) => {
      this.renderResponseInView(response);
    });
  }

  renderResponseInView(data: any) {
    console.log("some render implementation");
  }
}
