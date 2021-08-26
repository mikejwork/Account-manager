const electron = window.require('electron');
const { ipcRenderer } = electron

export default function send(sql) {
  return new Promise((resolve) => {
    ipcRenderer.once('asyncronous-reply', (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send('asyncronous-message', sql);
  });
}
