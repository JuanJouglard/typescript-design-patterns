import { ClientA } from "./clientA";
import { ClientB } from "./clientB";

const clientA = new ClientA();
const clientB = new ClientB();

const someVarClientA = clientA.getSomeVariable();
const someVarClientB = clientB.getSomeVariable();

console.log(someVarClientB === someVarClientA);
// true
