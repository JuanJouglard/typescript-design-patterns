import { Mouse } from "./mouse";
import { InteractionVisitor } from "./interaction.visitor";
import { CleanVisitor } from "./clean.visitor";

const mouseThatInteracts: Mouse = new Mouse(new InteractionVisitor());

const mouseThatRemoves: Mouse = new Mouse(new CleanVisitor());
