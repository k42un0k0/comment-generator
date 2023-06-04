import { App } from "electron";

export class AppDriver {
  constructor(private app: App) {}
  quit() {
    this.app.quit();
  }
}
