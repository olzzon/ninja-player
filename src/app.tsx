import React from "react";
import { ISettings } from "./model/types";
import { SettingsForm } from "./settingsMenu";
import { createHostUrl } from "./utils/createHostUrl";
import { loadSettings } from "./utils/storage";
import './style/app.css';
import { IpcRenderer } from "electron";
import { createRandomHash } from "./utils/createRandomHash";

// Definde global window object
declare global {
    interface Window {
        ipcRenderer: IpcRenderer
    }
}

let settings: ISettings = loadSettings()

if (!settings) {
    settings = {
      hostWebPage: "",
      clientWebPage: "",
      room: "",
      roomHash: createRandomHash(),
      id: "Player01",
      password: "",
      passwordHash: createRandomHash(),
      videoDevice: "1",
      audioDevice: "1",
      maxFrameRate: 50,
      refreshHashInterval: 7 
    };
  }

const url = createHostUrl(settings)

console.log('Stored Setting: ', settings)
console.log('Host Web Page: ', url);

window.ipcRenderer.send('settings', settings)
// saveSettings(settings)

const App = () => {
    return (
        <div className="app">
            <h1>NINJA - PLAYER
            </h1>
            <a href={url} className="webrtc-connect">START STREAMING</a>
            <hr/>
            <SettingsForm settings={settings}/>
        </div>
    );
}

export default App;