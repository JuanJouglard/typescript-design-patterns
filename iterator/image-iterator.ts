import { Iterator } from "./iterator";
import { Image } from "./images-list";

export class ImageIterator implements Iterator<Image> {
  arrayOfImages: Image[];
  index: number;
  constructor(arrayOfImages: Image[]) {
    this.arrayOfImages = arrayOfImages;
    this.index++;
  }

  next(): Image {
    const imageToReturn: Image = this.arrayOfImages[this.index];
    this.index++;
    return imageToReturn;
  }

  complete(): boolean {
    return this.index === this.arrayOfImages.length;
  }
}
