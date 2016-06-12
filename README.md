# World Map - showing events

This web page connects to an API using socket.io, and updates a map with the streamed events.

Uses:

* Socket.io
* Mapbox  / Leaflet.js

## Running

Development requires Gulp to process the stylesheets.

    `gulp`

To see the result it's best to run it via a local server such as `python -m SimpleHTTPServer`.

## TODO

Move JavaScripts into `src` and process/lint using Gulp. Tests.
