import { Iterable } from "./iterable";
import { Iterator } from "./iterator";
import { ImageIterator } from "./image-iterator";
export class ImageList implements Iterable<Image> {
  arrayOfImages: Image[];

  iterator(): Iterator<Image> {
    return new ImageIterator(this.arrayOfImages);
  }
}

export class Image {
  source: string;
  width: number;
  height: number;
}
