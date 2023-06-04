import { app } from "electron";
export function requireSingleInstance(cb: () => void) {
  const lock = app.requestSingleInstanceLock();
  if (lock) {
    cb();
  } else {
    app.quit();
  }
}
