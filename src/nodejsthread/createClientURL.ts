import { ISettings } from "../model/types";

export const createViewerURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.room || settings.roomHash}` +
    `&view=${settings.id}` +
    `&password=${settings.password || settings.passwordHash}` +
    `&scene` +
    `&bitrate=8000`
  );
}

export const createGuestURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.room || settings.roomHash}` +
    `&view=${settings.id}` +
    `&password=${settings.password || settings.passwordHash}` +
    `&bitrate=8000`
  );
}

export const createDirectorURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  
  return (
    `${settings.hostWebPage}` +
    `?direct=${settings.room || settings.roomHash}` +
    `&password=${settings.password || settings.passwordHash}`
  );
}