import { ISettings } from "../../model/types";

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
                        justify-content: center;
                    }
                h1, h2, h3  {
                        color: white;
                        justify-content: center;
                        text-align: center;
                }
                p    {
                        color: red;
                        justify-content: center;
                        text-align: center;
                }
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
            <title>Ninja Player</title>
        </head>
        <body>
          <h1>${settings.sourceName || "Ninja - Player"} :</h1>
          <hr/>
          <h3>Viewer URL:</h3>
          <p> 
              <button class="button button1" onclick="copyView('${
                settings.webserverURL
              }')">COPY VIEWER-LINK</button>
          </p>
          <hr/>
          <h3>Guest (1:1) URL:</h3>
          <p>
              <button class="button button1" onclick="copyGuest('${
                settings.webserverURL
              }')">COPY GUEST-LINK</button>
            </p>
          <hr/>
          <h3>Broadcast URL:</h3>
          <p>
              <button class="button button1" onclick="copyBroadcast('${
                settings.webserverURL
              }')">COPY BROADCAST-LINK</button>
          </p>
          <hr/>
          <p>
              <button class="button button2" onclick="resetNinjaPlayer('${
                settings.webserverURL
              }')">GENERATE NEW LINKS</button>
          </p>
          <hr/>

        </body>
        <script>
            function copyView(webserverURL: string) {
              fetch(webserverURL + "/linkurl")
                .then((response) => response.json())
                .then((data) => {
                  navigator.clipboard.writeText(data.viewer);
                });
            }
            function copyBroadcast(webserverURL: string) {
              fetch(webserverURL + "/linkurl")
                .then((response) => response.json())
                .then((data) => {
                  navigator.clipboard.writeText(data.broadcast);
                });
            }
            function copyGuest(webserverURL: string) {
              fetch(webserverURL + "/linkurl")
                .then((response) => response.json())
                .then((data) => {
                  navigator.clipboard.writeText(data.guest);
                });
            }
            
            function resetNinjaPlayer(webserverURL: string) {
              if (window.confirm("Reset Ninja-Player and generate new links?")) {
                fetch(webserverURL + "/engine?action=restart");
                setTimeout("location.reload(true);", 5000);
              }
            }
        </script>
      </html>
    `;
};

/*
Vars to add when moving the JS part for developing:
${copyView.toString()}
            ${copyGuest.toString()}
            ${copyBroadcast.toString()}
            ${resetNinjaPlayer.toString()}
            */
