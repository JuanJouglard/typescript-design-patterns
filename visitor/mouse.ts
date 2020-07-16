import { Link, Image, Button } from "./domelements";
import { Visitor } from "./visitor.interface";

export class Mouse {
  x: number;
  y: number;
  visitor: Visitor;

  constructor(visitor: Visitor) {
    this.visitor = visitor;
  }

  moveLeft() {
    this.x--;
  }
  moveRight() {
    this.x++;
  }
  moveTop() {
    this.y--;
  }
  moveBottom() {
    this.y++;
  }

  intersectionWithButton(button: Button) {
    button.accept(this.visitor);
  }
  intersectionWithLink(link: Link) {
    link.accept(this.visitor);
  }
  intersectionWithImage(image: Image) {
    image.accept(this.visitor);
  }
}
