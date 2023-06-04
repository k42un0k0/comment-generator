import { App } from "electron";
import { AppDriver } from "./drivers/appDriver";
import { AppEventListener } from "./drivers/eventListener/appEventListener";
import { MainWindowManager } from "./drivers/window/mainWindowDriver";

export function createUsecases() {
  return {};
}
export function createControllers(usecases: ReturnType<typeof createUsecases>) {
  return {};
}
export function createDrivers(
  app: App,
  controllers: ReturnType<typeof createControllers>
) {
  const appDriver = new AppDriver(app);
  const mainWindowManager = new MainWindowManager();
  new AppEventListener(app, mainWindowManager, appDriver).exec();
}
