import { Factory, Wall, Floor, Door } from "./factory.interface";

export class ContractorBFactory implements Factory {
  buildWall(): Wall {
    return new ContractorBWall();
  }
  buildFloor(): Floor {
    return new ContractorBFloor();
  }
  buildDoor(): Door {
    return new ContractorBDoor();
  }
}

export class ContractorBWall extends Wall {
  quality(): number {
    return (this.height + this.width) * this.material.length;
  }
}
export class ContractorBFloor extends Floor {
  quality(): number {
    return (this.height + this.width) * this.material.length;
  }
}
export class ContractorBDoor extends Door {
  quality(): number {
    return this.material.length;
  }
}
