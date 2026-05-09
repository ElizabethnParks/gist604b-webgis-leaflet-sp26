# [WebGIS with Leaflet]

**Student:** [Elizabeth Parks]
**Course:** GIST 604B – Open Source GIS
**Module:** [MODULE #6 WebGIS with Leaflet]
**University of Arizona**

## Project Description
This project focused on building a client-side WebGIS application using HTML, Javascript, and the Leaflet library. Using Visual Studio Code, I developed a web map that loads and displays spatial data. The final application was published using GitHub Pages to make the web map accessible online.

## Tools and Technologies
-Leaflet
-HTML, CSS, HTML
-GeoJSON
-GitHub Pages
- Visual Studio Code

## What I Did
- Open a cloned repositopry in Visual Studio Code, install project dependencies, and start the local server.
- Create a CSS, Javscript, and HTML to create an accessible web map.
- Publish the web map using GitHub Pages.

  ## How to View / Run
[
](https://elizabethnparks.github.io/gist604b-webgis-leaflet-sp26/)

## Repository Structure
    .
    ├── data/
    │   ├── your_point_layer.geojson
    │   ├── your_line_layer.geojson
    │   └── your_polygon_layer.geojson
    ├── js/
    │   └── your_js_file.js
    ├── css/
    │   └── your_css_file.css
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md

## Notes
- Replace the placeholder filenames in `data/`, `js/`, and `css/` with your own files.
- All GeoJSON datasets must be in WGS84 (EPSG:4326) and placed in the `data/` folder.
- Run `npm install` to install dependencies and `npm start` to launch the local development server.
- Open `http://localhost:8080` in your browser to preview your map during development.
- The final web map is published using GitHub Pages.
