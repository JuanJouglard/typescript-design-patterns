export abstract class DOMElement extends Node {
  id: string;
  styles: string[];
  width: number;
  height: number;

  drawInDom() {
    document.appendChild(this);
  }

  removeFromDOM() {
    document.removeChild(this);
  }

  performDefaultClickAction() {
    this.click();
  }
}
