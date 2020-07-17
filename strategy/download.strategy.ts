import { Strategy } from "./strategy.interface";

export class DownloadStrategy implements Strategy {
  handleImage(img: string) {
    console.log("Download image to user's computer");
  }
}
