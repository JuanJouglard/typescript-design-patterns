import { Factory, Wall, Door, Floor } from "./factory.interface";

export class HouseBuilder {
  factory: Factory;

  constructor(factory: Factory) {
    this.factory = factory;
  }

  buildHouse() {
    const wall1: Wall = this.factory.buildWall();
    const wall2: Wall = this.factory.buildWall();
    const wall3: Wall = this.factory.buildWall();
    const wall4: Wall = this.factory.buildWall();
    const door: Door = this.factory.buildDoor();
    const floor: Floor = this.factory.buildFloor();
  }
}
