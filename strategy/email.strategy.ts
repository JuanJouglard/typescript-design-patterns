import { Strategy } from "./strategy.interface";

export class EmailStrategy implements Strategy {
  handleImage(img: string) {
    console.log("Send image to user's email");
  }
}
