import { ISettings } from "../model/types";

export const createClientURL = (settings: ISettings) => {
  console.log("Creating client URL :", settings);
  
  return (
    `${settings.clientWebPage || settings.hostWebPage}` +
    `?room=${settings.room || settings.roomHash}` +
    `&view=${settings.id}` +
    `&password=${settings.password || settings.passwordHash}`
  );
}
