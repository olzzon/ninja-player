export interface ISettings {
    hostWebPage: string;
    clientWebPage: string;
    room: string;
    roomHash: string;
    id: string;
    videoDevice: string;
    audioDevice: string;
    password: string;
    passwordHash: string;
    maxFrameRate: number;
    refreshHashInterval: number; // in days
}