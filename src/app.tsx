import React from "react";
import { ISettings } from "./model/types";
import { SettingsForm } from "./settingsMenu";
import { createUrl } from "./utils/createUrl";
import { loadSettings } from "./utils/storage";
import './style/app.css';


const settings: ISettings = loadSettings()
// settings.webPage = "https://webrtc.olzzon.dk/tv2.html"
const url = createUrl(settings)


console.log('Stored Setting: ', settings)
// saveSettings(settings)

const App = () => {
    return (
        <div className="app">
            <h1>NINJA - PLAYER
            </h1>
            <a href={url} className="webrtc-connect">Connect to WebRTC server</a>
            <hr/>
            <SettingsForm />
            <p>LOG: Connection URL {url}</p>
        </div>
    );
}

export default App;