import { Visitor } from "./visitor.interface";
import { Link, Image, Button } from "./domelements";

export class InteractionVisitor implements Visitor {
  visitImage(image: Image): void {
    image.zoomIn();
  }
  visitButton(button: Button): void {
    button.click();
  }
  visitLink(link: Link): void {
    link.navigateTo();
  }
}
