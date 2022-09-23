import { ISettings } from "../model/types";

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
            <title>Nija Player</title>
        </head>
        <body>
          <h1>Ninja - Player Link page:</h1>
          <h3>Viewer URL:</h3>
          <hr/>
          <p> 
              <button class="button button1" onclick="copyView()">COPY VIEWER-LINK</button>
          </p>
          <hr/>
          <h3>Guest (1:1) URL:</h3>
          <hr/>
          <p>
              <button class="button button1" onclick="copyGuest()">COPY GUEST-LINK</button>
            </p>
          <hr/>
          <h3>Director URL:</h3>
          <hr/>
          <p>
              <button class="button button1" onclick="copyDirector()">COPY DIRECTOR-LINK</button>
          </p>
          <hr/>
          <p>
              <button class="button button2" onclick="resetNinjaPlayer()">GENERATE NEW LINKS</button>
          </p>
          <hr/>

        </body>
        <script>
            function copyView() {
                fetch('/linkurl')
                .then(response => response.json())
                .then(data => {
                    navigator.clipboard.writeText(data.viewer);
                }  
                );
            }
            function copyGuest() {
                fetch('/linkurl')
                .then(response => response.json())
                .then(data => {
                    navigator.clipboard.writeText(data.guest);
                }  
                );
            }
            function copyDirector() {
                fetch('/linkurl')
                .then(response => response.json())
                .then(data => {
                    navigator.clipboard.writeText(data.director);
                }  
                );
            }
            function resetNinjaPlayer() {
                if (window.confirm("Reset Ninja-Player and generate new links?")) {
                    fetch('/engine?action=restart')
                    setTimeout("location.reload(true);", 5000);
                }
            }
        </script>
      </html>
    `;
};