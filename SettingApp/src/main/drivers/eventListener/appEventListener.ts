import { App } from "electron";
import { MainWindowManager } from "../window/mainWindowDriver";
import { AppDriver } from "../appDriver";
import { EventListener } from "./eventListener";

export class AppEventListener implements EventListener {
  constructor(
    private app: App,
    private mainWindowManager: MainWindowManager,
    private appDriver: AppDriver
  ) {}
  exec() {
    this.app.whenReady().then(this.handleWhenReady.bind(this));
    this.app.once("window-all-closed", this.handleWindowAllClosed.bind(this));
  }
  handleWhenReady() {
    this.mainWindowManager.init({});
  }
  handleWindowAllClosed() {
    this.appDriver.quit();
  }
}
