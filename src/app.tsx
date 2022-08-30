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
      hostWebPage: "https://webrtc.olzzon.dk/olzzon.html",
      clientWebPage: "https://webrtc.olzzon.dk/olzzon.html",
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
window.ipcRenderer.send('settings', settings)
// saveSettings(settings)

const App = () => {
    return (
        <div className="app">
            <h1>NINJA - PLAYER
            </h1>
            <a href={url} className="webrtc-connect">Connect to WebRTC server</a>
            <hr/>
            <SettingsForm settings={settings}/>
            <p>LOG: Connection URL {url}</p>
        </div>
    );
}

export default App;