import { ISettings } from "../model/types";
import {
  createDirectorURL,
  createGuestURL,
  createViewerURL,
} from "./utils/createClientURL";

export const simpleWebPage = (settings: ISettings) => {
  return `
      <html>
        <head>
            <style>
                body {
                        background-color: black;
                        color: white;
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 20px;
                        padding: 20px;
                    }
                h1   {color: white;}
                p    {color: red;}
            </style>
            <title>Nija Player</title>
        </head>
        <body>
          <h1>Ninja - Player Link page:</h1>
          <h3>Viewer URL:</h3>
          <hr/>
          <p> 
          <button onclick="copyMyText('${createViewerURL(settings)}')">COPY VIEWER</button>
          ${createViewerURL(settings)}
          </p>
          <hr/>
          <h3>Guest (1:1) URL:</h3>
          <hr/>
          <p>
          <button onclick="copyMyText('${createGuestURL(settings)}')">COPY GUEST</button>
          ${createGuestURL(settings)}</p>
          <hr/>
          <h3>Director URL:</h3>
          <hr/>
          <p>
          <button onclick="copyMyText('${createDirectorURL(settings)}')">COPY DIRECTOR</button>
          ${createDirectorURL(settings)}</p>
          <hr/>
        </body>
        <script>
            function copyMyText(text) {
                navigator.clipboard.writeText(text)
            }
        </script>
      </html>
    `;
};
