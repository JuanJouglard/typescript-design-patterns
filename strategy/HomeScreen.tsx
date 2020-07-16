import {
  NewTabStrategy,
  DownloadStrategy,
  EmailStrategy,
} from "./strategies.all";
import { ImageScreen } from "./ImageScreen";

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
