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
    const settings: ISettings = JSON.parse(settingsString);
    if (settings.id === undefined) {
      settings.id = createRandomHash();
      settings.renewHashAtStart = false;
    }
    return settings;
  } catch (e) {
    console.log("Error loading settings:", e);
    console.log("Creating and storing new settings");
    const settings: ISettings = {
      id: createRandomHash(),
      autoStart: false,
      renewHashAtStart: true,
      webserverURL: "http://localhost:3900",
      portalUrl: "",
      hostWebPage: "",
      clientWebPage: "",
      directorWebPage: "",
      roomHash: createRandomHash(),
      sourceName: "Player01",
      passwordHash: createRandomHash(),
      videoDevice: "1",
      audioDevice: "1",
      maxFrameRate: 50,
    };
    saveSettings(settings);
    return settings;
  }
};
