import { ISettings } from "../model/types";

export const createUrl = (settings: ISettings) => {
  return `${settings.webPage}`
    +`?room=${settings.room}`
    +`&hash=${settings.hash}`
    +`&push=${settings.id}`
    +`&password=${settings.password}`
    +`&v`
    +`&vdevice=${settings.videoDevice}`
    +`&adevice=${settings.audioDevice}`
    +`&webcam`
    +`&autostart`;
};


