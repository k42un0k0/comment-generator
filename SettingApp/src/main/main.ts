import { app } from "electron";
import { requireSingleInstance } from "./utils/requireSingleInstance";
import { createControllers, createDrivers, createUsecases } from "./deps";

function main() {
  const usecases = createUsecases();
  const controllers = createControllers(usecases);
  createDrivers(app, controllers);
}

requireSingleInstance(main);
