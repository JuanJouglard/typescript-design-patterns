export interface Iterator<T> {
  next(): T;
  complete(): boolean;
}

export class ArrayIterator implements Iterator<number> {
  private arraytToIterate: any[];
  private nextIndex: number;

  constructor(arraytToIterate: any[]) {
    this.arraytToIterate = arraytToIterate;
    this.nextIndex = 0;
  }

  next(): number {
    const next = this.arraytToIterate[this.nextIndex];
    this.nextIndex++;
    return next;
  }

  complete(): boolean {
    return this.nextIndex === this.arraytToIterate.length;
  }
}
