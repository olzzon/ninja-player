import { ISettings } from "../../model/types";

export const createHostUrl = (settings: ISettings) => {
  const sourceName = settings.sourceName.replace(/ /g, '');
  return (
    `${settings.hostWebPage}` +
    `?room=${settings.room || settings.roomHash}` +
    `&push=${sourceName}` +
    `&password=${settings.password || settings.passwordHash}` +
    `&v` +
    `&vdevice=${settings.videoDevice}` +
    `&adevice=${settings.audioDevice}` +
    `&maxFrameRate=${settings.maxFrameRate}` +
    `&s` +
    `&webcam` +
    `&autostart`
  );
};


