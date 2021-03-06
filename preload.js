const {
    contextBridge,
    ipcRenderer
} = require("electron");
const fs = require("fs");
// expose communication functions to "renderer" under the name window.electron
contextBridge.exposeInMainWorld("electron", {
    ipcinvoke: (channel, args) => {
        return ipcRenderer.invoke(channel, args)
    },
    ipcon: (channel, listener) => {
        return ipcRenderer.on(channel, listener)
    }
})