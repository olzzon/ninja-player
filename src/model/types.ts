export interface ISettings {
    id: string;
    autoStart: boolean;
    renewHashAtStart: boolean;
    webserverURL: string;
    hostWebPage: string;
    clientWebPage: string;
    directorWebPage: string;
    portalUrl?: string;
    roomHash: string;
    sourceName: string;
    videoDevice: string;
    audioDevice: string;
    passwordHash: string;
    maxFrameRate: number;
}