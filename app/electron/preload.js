// eslint-disable-next-line import/no-extraneous-dependencies
const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const Store = require('secure-electron-store').default;
const ContextMenu = require('secure-electron-context-menu').default;
const SecureElectronLicenseKeys = require('secure-electron-license-keys');

// Create the electron store to be made available in the renderer process
const store = new Store();

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  store: store.preloadBindings(ipcRenderer, fs),
  contextMenu: ContextMenu.preloadBindings(ipcRenderer),
  licenseKeys: SecureElectronLicenseKeys.preloadBindings(ipcRenderer),
});

contextBridge.exposeInMainWorld('electron', {
  getVersion: () => ipcRenderer.invoke('applications-version'),
  login: (args) => ipcRenderer.invoke('auth-login', args),
  signup: (args) => ipcRenderer.invoke('auth-signup', args),
});
