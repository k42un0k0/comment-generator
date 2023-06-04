import { BrowserWindowConstructorOptions } from "electron";

export interface WindowDriver {
  init(options: BrowserWindowConstructorOptions): void;
}
