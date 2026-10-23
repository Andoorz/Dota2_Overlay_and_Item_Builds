import { app, BrowserWindow } from "electron";
import { startGsiServer } from "./gsi-server.js";
import { screen } from "electron";



function createWindow() {
  const win = new BrowserWindow({
  width: 500,
  height: 50,
  

  frame: false,
  transparent: true,
  alwaysOnTop: true,
  skipTaskbar: true,
  resizable: false
  
});

  const { width } = screen.getPrimaryDisplay().workAreaSize;
  win.setPosition(
    Math.floor(width / 2) - 250,
    70
  );
  win.loadURL("http://localhost:5173");
  win.setIgnoreMouseEvents(true);
}


app.whenReady().then(() => {
  startGsiServer();
  createWindow();
});