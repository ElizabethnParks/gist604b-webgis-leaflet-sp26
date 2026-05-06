//map_withCode.js
// Initialize map (centered roughly on USA)
var map = L.map('map', {
    center: [37.8, -96], 
    zoom: 4
});

// Add basemap
var basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add scale bar
L.control.scale().addTo(map);

// ---------- STYLES ----------

// Polygon style (states)
function polygonStyle(feature) {
    return {
        color: "#333",
        weight: 1,
        fillColor: "#74a9cf",
        fillOpacity: 0.5
    };
}

// Line style (rivers)
function lineStyle(feature) {
    return {
        color: "blue",
        weight: 2
    };
}

// Point style (cities)
function pointStyle(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: 5,
        fillColor: "red",
        color: "#000",
        weight: 1,
        fillOpacity: 0.8
    });
}

// ---------- LAYER GROUPS ----------
var pointLayer = L.layerGroup();
var lineLayer = L.layerGroup();
var polygonLayer = L.layerGroup();

// ---------- LOAD GEOJSON ----------

// POLYGONS (states)
fetch('data/admin1-us.geojson')
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            style: polygonStyle,
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.name) {
                    layer.bindPopup("State: " + feature.properties.name);
                }
            }
        }).addTo(polygonLayer);
    });

// LINES (rivers)
fetch('data/ne_110m_rivers_lake_centerlines.geojson')
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            style: lineStyle,
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.name) {
                    layer.bindPopup("River: " + feature.properties.name);
                }
            }
        }).addTo(lineLayer);
    });

// POINTS (cities)
fetch('data/ne_110m_populated_places_simple.geojson')
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: pointStyle,
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.name) {
                    layer.bindPopup("City: " + feature.properties.name);
                }
            }
        }).addTo(pointLayer);
    });

// ---------- ADD LAYERS TO MAP ----------
polygonLayer.addTo(map);
lineLayer.addTo(map);
pointLayer.addTo(map);
// ---------- LAYER CONTROL ----------
var overlayMaps = {
    "States": polygonLayer,
    "Rivers": lineLayer,
    "Cities": pointLayer
};

L.control.layers(null, overlayMaps).addTo(map);