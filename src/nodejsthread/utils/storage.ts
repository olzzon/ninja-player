import { ISettings } from "../../model/types";
import fs from "fs";
import { createRandomHash } from "./createRandomHash";

export const saveSettings = (settings: ISettings) => {
  const settingsString = JSON.stringify(settings);
  fs.writeFileSync("settings.json", settingsString);
};

export const loadSettings = (): ISettings => {
  try {
    const settingsString = fs.readFileSync("settings.json", "utf8");
    const settings = JSON.parse(settingsString);
    return settings;
  } catch (e) {
    console.log("Error loading settings:", e);
    return {
      autoStart: false,
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
};
