import { Factory, Wall, Floor, Door } from "./factory.interface";

export class ContractorAFactory implements Factory {
  buildWall(): Wall {
    return new ContractorAWall();
  }
  buildFloor(): Floor {
    return new ContractorAFloor();
  }
  buildDoor(): Door {
    return new ContractorADoor();
  }
}

export class ContractorAWall extends Wall {
  quality(): number {
    return this.height * this.width;
  }
}
export class ContractorAFloor extends Floor {
  quality(): number {
    return this.height * this.width;
  }
}
export class ContractorADoor extends Door {
  quality(): number {
    return this.material.length;
  }
}
