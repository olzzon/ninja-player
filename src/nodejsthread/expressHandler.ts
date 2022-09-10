import express from "express";
import http from "http";
import { ISettings } from "../model/types";
import {
  createDirectorURL,
  createViewerURL,
  createGuestURL,
} from "./utils/createClientURL";

const PORT = 80;

const expressApp: express.Application = express();
const httpServer = http.createServer(expressApp);
httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export const expressHandler = (settings: ISettings) => {
  expressApp.get("/linkurl", (req: any, res: any) => {
    console.log("Request /linkurl:", req);
    res.send(
      JSON.stringify({
        viewer: createViewerURL(settings),
        guest: createGuestURL(settings),
        director: createDirectorURL(settings),
      })
    );
  });
};
