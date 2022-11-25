import React, { useState } from "react";
import { ISettings } from "../model/types";
import { SettingsForm } from "./settingsMenu";
import { createHostUrl } from "./utils/createHostUrl";
import "../style/app.css";
import { IpcMain, IpcRenderer } from "electron";
import { StreamPage } from "./streaming";

// Definde global window object
declare global {
  interface Window {
    ipcRenderer: IpcRenderer;
    ipcMain: IpcMain;
  }
}

let settings: ISettings


const App = () => {
    const [ingestUrl, setIngestUrl] = useState('');
    const [startStream, setStartStream] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    
    window.ipcRenderer.invoke("get-settings").then((payload: ISettings) => {
        settings = payload;
        console.log("Settings", settings);
        setIngestUrl(createHostUrl(settings));
        setStartStream(settings.autoStart);
        setShowSettings(!settings.autoStart)
    })
    
  return (
    <div className="app">
      <h1>NINJA - PLAYER</h1>
      <button className="webrtc-connect" onClick={() => setStartStream(true)}>
        START STREAMING
      </button>
      {startStream ? <StreamPage url={ingestUrl} /> : null}
      {showSettings ? <SettingsForm settings={settings} /> : null}
    </div>
  );
};

export default App;
