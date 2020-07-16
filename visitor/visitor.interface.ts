import { Link, Image, Button } from "./domelements";

export interface Visitor {
  visitLink(link: Link): void;

  visitImage(image: Image): void;

  visitButton(button: Button): void;
}
