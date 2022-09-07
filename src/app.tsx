import React, { useState } from "react";
import { ISettings } from "./model/types";
import { SettingsForm } from "./settingsMenu";
import { createHostUrl } from "./utils/createHostUrl";
import { loadSettings } from "./utils/storage";
import "./style/app.css";
import { IpcRenderer } from "electron";
import { createRandomHash } from "./utils/createRandomHash";
import { StreamPage } from "./streaming";

// Definde global window object
declare global {
  interface Window {
    ipcRenderer: IpcRenderer;
  }
}

let settings: ISettings = loadSettings();

if (!settings) {
  settings = {
    hostWebPage: "",
    clientWebPage: "",
    directorWebPage: "",
    room: "",
    roomHash: createRandomHash(),
    id: "Player01",
    password: "",
    passwordHash: createRandomHash(),
    videoDevice: "1",
    audioDevice: "1",
    maxFrameRate: 50,
    refreshHashInterval: 7,
  };
}

const url = createHostUrl(settings);

console.log("Stored Setting: ", settings);
console.log("Host Web Page: ", url);

window.ipcRenderer.send("settings", settings);
// saveSettings(settings)


// <a href={url} className="webrtc-connect">START STREAMING</a>

const App = () => {
    const [startStream, setStartStream] = useState(false);
  return (
    <div className="app">
      <h1>NINJA - PLAYER</h1>
      <button className="webrtc-connect" onClick={() => setStartStream(true)}>START STREAMING</button>
      {startStream ? (
        <StreamPage url={url} />
      ) : null}
      <SettingsForm settings={settings} />
    </div>
  ); 
};

export default App;
