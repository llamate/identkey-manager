const { app, BrowserWindow, Menu } = require('electron');

const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow.webContents.openDevTools()
}

app.on('ready', function () {
  createWindow()

  const template = [
    {
      label: 'Select Data',
      submenu: [
        { label: 'CSV' },
        { label: 'Database' }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
