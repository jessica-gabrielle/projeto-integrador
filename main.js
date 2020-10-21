const {app, BrowserWindow, ipcMain} = require('electron')
const url = require('url')
const path = require('path')
const fs = require("fs");

let logon
let sistema

function createLogon() {
  logon = new BrowserWindow({ minWidth:504, minHeight: 600, width: 800, height: 800, webPreferences: {nodeIntegration: true, enableRemoteModule: true}});
  logon.loadFile('login.html') 
}

function createWindow () {
  // Cria uma janela de navegação.
  sistema = new BrowserWindow({minWidth:850,height: 600,  webPreferences: {nodeIntegration: true, enableRemoteModule: true}})

  // e carrega o arquivo index.html do seu aplicativo.
  sistema.loadURL(url.format ({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
 }))

  // e carrega o arquivo index.html do seu aplicativo.
  // win.loadFile('login.html') 

  // Abrir o DevTools (aba de ferramentas para desenvolvedores).
  sistema.webContents.openDevTools()
}

exports.openWindow = () => {
  createWindow();
  logon.destroy();
}

// Este método será chamado quando Electron terminar de inicializar
// e também estiver pronto para criar novas janelas do navegador.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(createLogon)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// Nesse arquivo, você pode incluir o resto do código principal
// de processos do seu aplicativo.
// Você também pode colocar eles em arquivos separados e requeridos-as aqui.
