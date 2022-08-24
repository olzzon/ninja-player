import { ISettings } from "../model/types";

export const loadSettings = () => {
  const settings = localStorage.getItem("settings");
  if (settings) {
    return JSON.parse(settings);
  }
  return {};
};

export const saveSettings = (settings: ISettings) => {  
  console.log('saveSettings', settings)  
  localStorage.setItem("settings", JSON.stringify(settings));
}