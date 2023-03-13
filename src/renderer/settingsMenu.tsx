import React, { useState } from "react";
import { ISettings } from "../model/types";
import "../style/settings.css";
import { createRandomHash } from "../server/utils/createRandomHash";

interface ISettingsProps {
  settings: ISettings;
}

export const SettingsForm: React.FC<ISettingsProps> = (props) => {
  let settings = props.settings;
  const [autoStart, setAutoStart] = useState(false);
  const [renewHashAtStart, setRenewHashAtStart] = useState<boolean>(settings.renewHashAtStart || true);
  const [webserverURL, setWebserverURL] = useState(settings.webserverURL);
  const [portalURL, setPortalURL] = useState(settings.portalUrl || "");
  const [hostWebPage, setHostWebPage] = useState(settings.hostWebPage);
  const [clientWebPage, setClientWebPage] = useState(settings.clientWebPage);
  const [directorWebPage, setDirectorWebPage] = useState(
    settings.directorWebPage
  );
  const [sourceName, setSourceName] = useState(settings.sourceName);
  const [videoDevice, setVideoDevice] = useState(settings.videoDevice || "1");
  const [audioDevice, setAudioDevice] = useState(settings.audioDevice || "1");
  const [maxFrameRate, setMaxFrameRate] = useState(settings.maxFrameRate);
  const [roomHash] = useState(createRandomHash());
  const [passwordHash] = useState(createRandomHash());

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    settings = {
      id: settings.id,
      autoStart,
      webserverURL,
      hostWebPage,
      portalUrl: portalURL,
      clientWebPage,
      directorWebPage,
      roomHash,
      sourceName: sourceName,
      passwordHash,
      videoDevice,
      audioDevice,
      maxFrameRate,
      renewHashAtStart,
    };
    console.log("Settings Submit", settings);

    window.ipcRenderer.send("save-settings", settings);
  };

  return (
    <div className="settings-window">
      <label className="settings-label">
        Auto Start
        <input
          type="checkbox"
          checked={autoStart}
          onChange={(e) => setAutoStart(e.target.checked)}
        />
      </label>
      <label className="settings-label">
        Renew Hash at Start
        <input
          type="checkbox"
          checked={renewHashAtStart}
          onChange={(e) => setRenewHashAtStart(e.target.checked)}
        />
      </label>
      <label className="settings-label">
        Unique ID (Portal Reference): {settings.id}
      </label>
      <label className="settings-label">
        Source Name:(letters and numbers NO spaces)
        <input
          className="settings-input"
          type="text"
          value={sourceName || ""}
          onChange={(event) => {
            setSourceName(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Local Webserver URL:
        <input
          className="settings-input"
          type="text"
          value={webserverURL}
          onChange={(e) => setWebserverURL(e.target.value)}
        />
      </label>
      <label className="settings-label">
        WebRTC Portal URL:
        <input
          className="settings-input"
          type="text"
          value={portalURL}
          onChange={(e) => setPortalURL(e.target.value)}
        />
      </label>
      <label className="settings-label">
        Ingest Web Page:
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
        Director web Page:
        <input
          className="settings-input"
          type="text"
          value={directorWebPage || ""}
          onChange={(event) => {
            setDirectorWebPage(event.target.value);
          }}
        ></input>
      </label>
      <label className="settings-label">
        Guest Web Page:
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

      <button className="settings-button" onClick={(e) => handleSubmit(e)}>
        Save & Restart
      </button>
    </div>
  );
};
