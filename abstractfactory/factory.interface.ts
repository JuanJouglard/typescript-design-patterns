export interface Factory {
  buildWall(): Wall;

  buildFloor(): Floor;

  buildDoor(): Door;
}

export abstract class Wall {
  material: string;
  height: number;
  width: number;
  abstract quality(): number;
}
export abstract class Floor {
  material: string;
  height: number;
  width: number;
  abstract quality(): number;
}
export abstract class Door {
  material: string;
  abstract quality(): number;
}
