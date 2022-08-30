import { ISettings } from "../model/types";

export const createHostUrl = (settings: ISettings) => {
  return (
    `${settings.hostWebPage}` +
    `?room=${settings.room || settings.roomHash}` +
    `&push=${settings.id}` +
    `&password=${settings.password || settings.passwordHash}` +
    `&v` +
    `&vdevice=${settings.videoDevice}` +
    `&adevice=${settings.audioDevice}` +
    `&maxFrameRate=${settings.maxFrameRate}` +
    `&webcam` +
    `&autostart`
  );
};


