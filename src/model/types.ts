export interface ISettings {
    autoStart: boolean;
    webserverURL: string;
    hostWebPage: string;
    clientWebPage: string;
    directorWebPage: string;
    room: string;
    roomHash: string;
    sourceName: string;
    videoDevice: string;
    audioDevice: string;
    password: string;
    passwordHash: string;
    maxFrameRate: number;
    refreshHashInterval: number; // in days
}