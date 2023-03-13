import express, {Response, Request} from "express";
import http from "http";
import { quitApp, restartApp } from ".";
import { ISettings } from "../model/types";
import { simpleWebPage, viewerLink } from "./adminserver/simpleWebpage";
import { createViewerURL, createAllURLs } from "./utils/createClientURL";
import { createRandomHash } from "./utils/createRandomHash";
import { restApiPostToPortal } from "./utils/restApiPostToPortal";
import { saveSettings } from "./utils/storage";

const PORT = 3900;

const expressApp: express.Application = express();
const httpServer = http.createServer(expressApp);

export const expressHandler = (settings: ISettings) => {
  expressApp
    .get("/", (req: Request, res: Response) => {
      console.log("Request :", req);
      res.send(simpleWebPage(settings));
    })
    .get("/linkurl", (req: Request, res: Response) => {
      console.log("Request /linkurl:", req);
      res.send(JSON.stringify(createAllURLs(settings)));
    })
    .get("/view", (req: Request, res: Response) => {
      console.log("Request /linkurl:", req);
      res.send(viewerLink(createViewerURL(settings)));
    })
    .get("/engine", (req, res) => {
      console.log("Request /engine:", req.query);
      if (req.query?.action === "quit") {
        res.send("Quiting Ninja-player");
        quitApp();
      } else if (req.query?.action === "renewhash") {
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

  if (settings.portalUrl) {
    setInterval(() => {
      restApiPostToPortal(settings);
      console.log(`Posting to ${settings.portalUrl}`);
    }, 10000);
  }
};
