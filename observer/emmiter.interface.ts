export interface Emitter {
  emitNewValue(newValue: any);

  registerNewConsumer(callback);
}
