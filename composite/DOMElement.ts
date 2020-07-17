export abstract class DOMElement {
  id: string;
  styles: string[];
  width: number;
  height: number;

  drawInDom() {
    console.log("Render logic");
  }

  removeFromDOM() {
    console.log("Remove element from the DOM tree");
  }

  performDefaultClickAction() {
    console.log("Click logic");
  }
}
