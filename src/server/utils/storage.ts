import { ISettings } from "../../model/types";
import fs from "fs";
import { createRandomHash } from "./createRandomHash";
import os from 'os'
import path from 'path'
const homeDir = os.homedir();
const SETTINGS_FILE = path.join(homeDir, "settings.json");

// process.env.HOME

export const saveSettings = (settings: ISettings) => {
  const settingsString = JSON.stringify(settings);
  fs.writeFileSync(SETTINGS_FILE, settingsString);
};

export const loadSettings = (): ISettings => {
  try {
    const settingsString = fs.readFileSync(SETTINGS_FILE, "utf8");
    const settings = JSON.parse(settingsString);
    return settings;
  } catch (e) {
    console.log("Error loading settings:", e);
    console.log("Creating and storing new settings");
    const settings: ISettings = {
      autoStart: false,
      webserverURL: "http://localhost:3900",
      hostWebPage: "",
      clientWebPage: "",
      directorWebPage: "",
      room: "",
      roomHash: createRandomHash(),
      sourceName: "Player01",
      password: "",
      passwordHash: createRandomHash(),
      videoDevice: "1",
      audioDevice: "1",
      maxFrameRate: 50,
      refreshHashInterval: 0,
    };
    saveSettings(settings);
    return settings;
  }
};
