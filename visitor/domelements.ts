import { Visitor } from "./visitor.interface";
export abstract class DOMElement {
  removeFromDOM(): void {
    console.log("Remove element from DOM");
  }
}

export class Link extends DOMElement {
  navigateTo(): void {
    console.log("nagivation logic");
  }

  accept(visitor: Visitor) {
    visitor.visitLink(this);
  }
}
export class Image extends DOMElement {
  zoomIn(): void {
    console.log("Zoom logic");
  }

  accept(visitor: Visitor) {
    visitor.visitImage(this);
  }
}
export class Button extends DOMElement {
  click(): void {
    console.log("Click logic");
  }

  accept(visitor: Visitor) {
    visitor.visitButton(this);
  }
}
