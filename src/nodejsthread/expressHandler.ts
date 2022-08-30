import express from "express";
import http from "http";
import { ISettings } from "../model/types";
import { createClientURL } from "./createClientURL";

const PORT = 80

const expressApp: express.Application = express();
const httpServer = http.createServer(expressApp);
httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

export const expressHandler = (settings: ISettings) => {
  expressApp.get("/", (req: any, res: any) => {
    console.log("Request :", req);
    res.send(
        "THIS IS THE URL TO THE CLIENT : " + createClientURL(settings)
    );
  });
};
