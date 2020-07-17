import { Visitor } from "./visitor.interface";
import { Link, Image, Button } from "./domelements";

export class CleanVisitor implements Visitor {
  visitImage(image: Image): void {
    image.removeFromDOM();
  }
  visitButton(button: Button): void {
    button.removeFromDOM();
  }
  visitLink(link: Link): void {
    link.removeFromDOM();
  }
}
