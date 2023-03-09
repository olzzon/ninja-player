import express from "express";
import http from "http";
import { quitApp, restartApp } from ".";
import { ISettings } from "../model/types";
import { simpleWebPage, viewerLink } from "./adminserver/simpleWebpage";
import {
  createDirectorURL,
  createViewerURL,
  createGuestURL,
  createBroadcastURL,
  createLoResURL,
} from "./utils/createClientURL";
import { createRandomHash } from "./utils/createRandomHash";
import { saveSettings } from "./utils/storage";

const PORT = 3900;

const expressApp: express.Application = express();
const httpServer = http.createServer(expressApp);

export const expressHandler = (settings: ISettings) => {
  expressApp
    .get("/", (req: any, res: any) => {
      console.log("Request :", req);
      res.send(simpleWebPage(settings));
    })
    .get("/linkurl", (req: any, res: any) => {
      console.log("Request /linkurl:", req);
      res.send(
        JSON.stringify({
          viewer: createViewerURL(settings),
          guest: createGuestURL(settings),
          broadcast: createBroadcastURL(settings),
          director: createDirectorURL(settings),
          lores: createLoResURL(settings)
        })
      );
    })
    .get("/view", (req: any, res: any) => {
      console.log("Request /linkurl:", req);
      res.send(
        viewerLink(createViewerURL(settings))
      );
    })
    .get("/engine", (req, res) => {
      console.log("Request /engine:", req.query);
      if (req.query?.action === "quit") {
        res.send("Quiting Ninja-player");
        quitApp();
      } else if (req.query?.action === "restart") {
        settings.roomHash = createRandomHash();
        settings.passwordHash = createRandomHash();
        saveSettings(settings);
        res.send("Restarting Ninja-player");
        restartApp();
      } else {
        console.log("Unknown action:", req.query?.action);
      }
    });

  httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};
