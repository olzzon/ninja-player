import { ISettings } from "../../model/types";

export const createViewerURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  const sourceName = settings.sourceName.replace(/ /g, '');
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.room || settings.roomHash}` +
    `&view=${sourceName}` +
    `&password=${settings.password || settings.passwordHash}` +
    `&scene` +
    `&bitrate=8000`
  );
}

export const createBroadcastURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  const sourceName = settings.sourceName.replace(/ /g, '');
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.room || settings.roomHash}` +
    `&view=${sourceName}` +
    `&password=${settings.password || settings.passwordHash}` +
    `&scene` +
    `&bitrate=48000` +
    `&s` +
    `&codec=av1`
  );
}

export const createGuestURL = (settings: ISettings) => {
  console.log("Creating Guest URL :", settings);
  const sourceName = settings.sourceName.replace(/ /g, '');
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.room || settings.roomHash}` +
    `&view=${sourceName}` +
    `&password=${settings.password || settings.passwordHash}` +
    `&bitrate=8000`
  );
}

export const createDirectorURL = (settings: ISettings) => {
  console.log("Creating Director URL :", settings);
  
  return (
    `${settings.directorWebPage}` +
    `?director=${settings.room || settings.roomHash}` +
    `&password=${settings.password || settings.passwordHash}`
  );
}