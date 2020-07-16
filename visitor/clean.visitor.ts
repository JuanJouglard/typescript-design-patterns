import { Visitor, Image, Button } from "./visitor.interface";
import { Link } from "./visitor.interface";

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
