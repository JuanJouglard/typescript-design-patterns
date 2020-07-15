import { ContractorAFactory } from "./contractor-a.factory";
import { ContractorBFactory } from "./contractor-b.factory";
import { HouseBuilder } from "./house.builder";

const contractorABuilder = new HouseBuilder(new ContractorAFactory());
const contractorBBuilder = new HouseBuilder(new ContractorBFactory());
const houseA = contractorABuilder.buildHouse();
const houseB = contractorBBuilder.buildHouse();
