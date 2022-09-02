import React, { useState } from "react";
import { ISettings } from "./model/types";
import { saveSettings } from "./utils/storage";
import "./style/settings.css";
import { createRandomHash } from "./utils/createRandomHash";

interface ISettingsProps {
  settings: ISettings;
}

export const SettingsForm: React.FC<ISettingsProps> = (props) => {
  let settings = props.settings;
  const [hostWebPage, setHostWebPage] = useState(settings.hostWebPage);
  const [clientWebPage, setClientWebPage] = useState(settings.clientWebPage);
  const [room, setRoom] = useState(settings.room);
  const [id, setId] = useState(settings.id);
  const [password, setPassword] = useState(settings.password);
  const [videoDevice, setVideoDevice] = useState(settings.videoDevice || "1");
  const [audioDevice, setAudioDevice] = useState(settings.audioDevice || "1");
  const [maxFrameRate, setMaxFrameRate] = useState(settings.maxFrameRate);
  const [refreshHashInterval, setRefreshHashInterval] = useState(
    settings.refreshHashInterval || 0
  );
  const [roomHash] = useState(createRandomHash());
  const [passwordHash] = useState(createRandomHash());

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Settings pre Submit", settings);

    settings = {
      hostWebPage: hostWebPage,
      clientWebPage: clientWebPage,
      room,
      roomHash,
      id,
      password,
      passwordHash,
      videoDevice,
      audioDevice,
      maxFrameRate,
      refreshHashInterval,
    };
    console.log("Settings post Submit", settings);

    saveSettings(settings);
    setTimeout(() => {
      window.ipcRenderer.send("restart", settings);
    }, 1000);
  };

  return (
    <div className="settings-window">
      <h2>Settings</h2>
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
        HostWebPage:
        <input
          className="settings-input"
          type="text"
          value={hostWebPage || ""}
          onChange={(event) => {
            setHostWebPage(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        ClientWebPage:
        <input
          className="settings-input"
          type="text"
          value={clientWebPage || ""}
          onChange={(event) => {
            setClientWebPage(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Room: (none=random)
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
        Password: (none=random)
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
        Video Source: (1=default or part of device name)
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
        Audio Source: (1=default or part of device name)
        <input
          className="settings-input"
          type="text"
          value={audioDevice || ""}
          onChange={(event) => {
            setAudioDevice(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Max Frame Rate:
        <input
          className="settings-input"
          type="number"
          value={maxFrameRate || 50}
          onChange={(event) => {
            setMaxFrameRate(parseInt(event.target.value));
          }}
        ></input>
      </label>
      <label className="settings-label">
        Refresh Hash Interval: (days)
        <input
          className="settings-input"
          type="number"
          value={refreshHashInterval || 0}
          onChange={(event) => {
            setRefreshHashInterval(parseInt(event.target.value));
          }}
        ></input>
      </label>

      <button className="settings-button" onClick={(e) => handleSubmit(e)}>
        Save & Restart
      </button>
    </div>
  );
};
