# Ninja Player
A tool for ingesting video into VDO.Ninja

## Features
* Ingests video from a live source
* REST API for getting links to the videostreams


## Screen layout:
<img src='./docs/screen.png' width='600px' />


## Configuration
- Ingest Web Page: The URL of the WebRTC server
- Guest Web Page: Optional, if there's different link for ingest/director and guests/viewers
- Room and Password: If you wish static room and password, you can set it here. Otherwise, it will be generated randomly.
- Video Source: 1 is the default camera, if you wish another source, you can write a part of the devicename here. For example, if you have a Logitech C920, you can write "Logitech" here.
- Audio Source: Same as video source, but for audio.
- Max Frame Rate: The maximum framerate to use for the video. If you have a beandwith issues you can for clients not to use higher framerates
- Refresh Hash Interval: How often you wish to restart the client. (Used for regenerating random hash-codes, e.g. you only wish that links works for 7 days)


## REST API
GET http://127.0.0.1:3900/linkurl returns:
{
    viewer: (linkto viewer)
    guest: (linkto guest)
    director: (linkto director)
}

## LINK WEBPAGE
http://127.0.0.1:3900



