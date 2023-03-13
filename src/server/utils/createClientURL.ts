import { ISettings } from "../../model/types";

export const createLoResURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  const sourceName = settings.sourceName.replace(/ /g, '');
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.roomHash}` +
    `&view=${sourceName}` +
    `&password=${settings.passwordHash}` +
    `&scene` +
    `&codec=vp8` +
    `&bitrate=900`
  );
}

export const createViewerURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  const sourceName = settings.sourceName.replace(/ /g, '');
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.roomHash}` +
    `&view=${sourceName}` +
    `&password=${settings.passwordHash}` +
    `&scene` +
    `&codec=h264` +
    `&bitrate=8000`
  );
}

export const createBroadcastURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  const sourceName = settings.sourceName.replace(/ /g, '');
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.roomHash}` +
    `&view=${sourceName}` +
    `&password=${settings.passwordHash}` +
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
    `?room=${settings.roomHash}` +
    `&view=${sourceName}` +
    `&password=${settings.passwordHash}` +
    `&codec=h264` +
    `&bitrate=8000`
  );
}

export const createDirectorURL = (settings: ISettings) => {
  console.log("Creating Director URL :", settings);
  
  return (
    `${settings.directorWebPage}` +
    `?director=${settings.roomHash}` +
    `&password=${settings.passwordHash}`
  );
}

export const createAllURLs = (settings: ISettings) => {
  return {
    viewer: createViewerURL(settings),
    guest: createGuestURL(settings),
    broadcast: createBroadcastURL(settings),
    director: createDirectorURL(settings),
    lores: createLoResURL(settings)
  };
}