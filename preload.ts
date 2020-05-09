import { loadToDom } from "./renderer/basicButton";
import { ipcRenderer } from "electron";
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  loadToDom();
});

declare global {
  interface Window { 
    mainProcessFunc : (command: string) => Promise<string>,
  }
}

window.mainProcessFunc = async function(command :string) {
  return ipcRenderer.invoke('command-exec', command);
};