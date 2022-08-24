import React, { useState } from "react";
import { ISettings } from "./model/types";
import { loadSettings, saveSettings } from "./utils/storage";
import './style/settings.css'

// let settings: ISettings = loadSettings();
let settings: ISettings = undefined;
if (!settings) {
  settings = {
    webPage: "https://webrtc.olzzon.dk/tv2.html",
    room: "TV2adhoc",
    hash: "a987",
    id: "TEST1",
    password: "adhoc01olzzonTV2",
    videoDevice: "",
    audioDevice: "",
  };
}

export const SettingsForm: React.FC = () => {
  const [webPage, setWebPage] = useState(settings.webPage);
  const [room, setRoom] = useState(settings.room);
  const [hash, setHash] = useState(settings.hash);
  const [id, setId] = useState(settings.id);
  const [password, setPassword] = useState(settings.password);
  const [videoDevice, setVideoDevice] = useState(settings.videoDevice);
  const [audioDevice, setAudioDevice] = useState(settings.audioDevice);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Settings pre Submit", settings);
    
    settings = {
      webPage,
      room,
      hash,
      id,
      password,
      videoDevice,
      audioDevice,
    };
    console.log("Settings post Submit", settings);
    
    saveSettings(settings);
  }


  return (
    <div className="settings-window">
      <h2>Settings</h2>
      <label className="settings-label">
        WebPage:
        <input
          className="settings-input"
          type="text"
          value={webPage || ""}
          onChange={(event) => {
            setWebPage(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Room:
        <input
          className="settings-input"
          type="text"
          value={room || ""}
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Hash:
        <input
          className="settings-input"
          type="text"
          value={hash || ""}
          onChange={(event) => {
            setHash(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Id:
        <input
          className="settings-input"
          type="text"
          value={id || ""}
          onChange={(event) => {
            setId(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Password:
        <input
          className="settings-input"
          type="text"
          value={password || ""}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Video Source:
        <input
          className="settings-input"
          type="text"
          value={videoDevice || ""}
          onChange={(event) => {
            setVideoDevice(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Audio Source:
        <input
          className="settings-input"
          type="text"
          value={audioDevice || ""}
          onChange={(event) => {
            setAudioDevice(event.target.value);
          }}
        ></input>
      </label>
          
      <button className="settings-button" onClick={(e) =>handleSubmit(e)}>
        Save
      </button>
    </div>

  );
};
