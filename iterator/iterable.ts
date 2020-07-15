import { ArrayIterator, Iterator } from "./iterator";

export interface Iterable<T> {
  iterator(): Iterator<T>;
}

export class Array implements Iterable<number> {
  array: number[];

  constructor(array: number[]) {
    this.array = array;
  }

  iterator(): Iterator<number> {
    return new ArrayIterator(this.array);
  }
}
