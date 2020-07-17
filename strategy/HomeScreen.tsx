import { ImageScreen } from "./ImageScreen";
import { NewTabStrategy } from "./newtab.strategy";
import { DownloadStrategy } from "./download.strategy";
import { EmailStrategy } from "./email.strategy";

export class HomeScreen {
  render() {
    return (
      <div>
        <ImageScreen strategy={new NewTabStrategy()}></ImageScreen>
        <ImageScreen strategy={new DownloadStrategy()}></ImageScreen>
        <ImageScreen strategy={new EmailStrategy()}></ImageScreen>
      </div>
    );
  }
}
