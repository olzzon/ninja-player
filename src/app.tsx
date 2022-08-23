import React from "react";
import { loadSettings } from "./utils/storage";



const settings: any = loadSettings()
settings.url = "https://webrtc.olzzon.dk/tv2.html?room=TV2adhoc&hash=a987&v"

const App = () => {
    return (
        <div>
            <h1>NINJA - PLAYER
            </h1>
            <a href={settings.url}>Click me</a>
        </div>
    );
}

export default App;