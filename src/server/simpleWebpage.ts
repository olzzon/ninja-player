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
                .button {
                    width: 300px;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    cursor: pointer;
                  }                  
                  .button1 {background-color: #4CAF50;} /* Green */
                  .button2 {background-color: #008CBA;}
            </style>
            <title>Nija Player</title>
        </head>
        <body>
          <h1>Ninja - Player Link page:</h1>
          <h3>Viewer URL:</h3>
          <hr/>
          <p> 
              <button class="button button1" onclick="copyMyText('${createViewerURL(settings)}')">COPY VIEWER</button>
              ${createViewerURL(settings)}
          </p>
          <hr/>
          <h3>Guest (1:1) URL:</h3>
          <hr/>
          <p>
              <button class="button button1" onclick="copyMyText('${createGuestURL(settings)}')">COPY GUEST</button>
            ${createGuestURL(settings)}</p>
          <hr/>
          <h3>Director URL:</h3>
          <hr/>
          <p>
              <button class="button button1" onclick="copyMyText('${createDirectorURL(settings)}')">COPY DIRECTOR</button>
              ${createDirectorURL(settings)}</p>
          <hr/>
          <p>
              <button class="button button2" onclick="resetNinjaPlayer()">GENERATE NEW LINKS</button>
          </p>
          <hr/>

        </body>
        <script>
            function copyMyText(text) {
                navigator.clipboard.writeText(text)
            }
            function resetNinjaPlayer() {
                fetch('/engine?action=restart')
                setTimeout("location.reload(true);", 5000);
            }
        </script>
      </html>
    `;
};
