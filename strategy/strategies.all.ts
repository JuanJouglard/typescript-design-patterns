import { Strategy } from "./strategy.interface";

export class NewTabStrategy implements Strategy {
  handleImage(img: string) {
    console.log("Open image in new Tab");
  }
}

export class DownloadStrategy implements Strategy {
  handleImage(img: string) {
    console.log("Download image to user's computer");
  }
}
export class EmailStrategy implements Strategy {
  handleImage(img: string) {
    console.log("Send image to user's email");
  }
}
