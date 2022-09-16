import express from "express";
import http from "http";
import { quitApp, restartApp } from ".";
import { ISettings } from "../model/types";
import {
  createDirectorURL,
  createViewerURL,
  createGuestURL,
} from "./utils/createClientURL";

const PORT = 3900;

const expressApp: express.Application = express();
const httpServer = http.createServer(expressApp);

const simpleWebPage = (settings: ISettings) => {
  return `
    <html>
      <head>
        <title>Nija Player</title>
      </head>
      <body>
        <h1>Ninja - Player Link page:</h1>
        <h3>Viewer URL:</h3>
        <hr/>
        <p> ${createViewerURL(settings)}</p>
        <hr/>
        <h3>Guest (1:1) URL:</h3>
        <hr/>
        <p> ${createGuestURL(settings)}</p>
        <hr/>
        <h3>Director URL:</h3>
        <hr/>
        <p> ${createDirectorURL(settings)}</p>
        <hr/>
      </body>
    </html>
  `;
};

export const expressHandler = (settings: ISettings) => {
  expressApp
    .get("/", (req, res) => {
      res.send(simpleWebPage(settings));
    })
    .get("/linkurl", (req: any, res: any) => {
      console.log("Request /linkurl:", req);
      res.send(
        JSON.stringify({
          viewer: createViewerURL(settings),
          guest: createGuestURL(settings),
          director: createDirectorURL(settings),
        })
      );
    })
    .post("/engine", (req, res) => {
      console.log("Request /engine:", req.query);
      
        if (req.query?.action === "quit") {
          console.log("Quiting Ninja-player");
          res.send("Quiting Ninja-player");
          quitApp();
        } else if (req.query?.action === "restart") {
          console.log("Restarting Ninja-player");
          res.send("Restarting Ninja-player");
          restartApp();
        } else {
          console.log('Unknown action:', req.query?.action);
          
        }
    });

  httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};
