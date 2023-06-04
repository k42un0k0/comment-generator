import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";
import path from "path";
import { WindowDriver } from "./windowDriver";
import { pagesPath } from "../../utils/path";
export class MainWindowManager implements WindowDriver {
  private window?: BrowserWindow;
  init(options: BrowserWindowConstructorOptions) {
    this.window = new BrowserWindow(options);
    this.window.loadFile(pagesPath.index);
  }
}
