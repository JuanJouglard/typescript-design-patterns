import { Strategy } from "./strategy.interface";

export class NewTabStrategy implements Strategy {
  handleImage(img: string) {
    console.log("Open image in new Tab");
  }
}
