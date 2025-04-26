/*global WildRydes*/

var WildRydes = window.WildRydes || {};
WildRydes.map = WildRydes.map || {};

require([
    'esri/Map',
    'esri/views/MapView',
    'esri/Graphic',
    'esri/geometry/Point',
    'esri/symbols/SimpleMarkerSymbol'
], function (Map, MapView, Graphic, Point, SimpleMarkerSymbol) {

    var map = new Map({
        basemap: 'streets'
    });

    var view = new MapView({
        container: 'map',
        map: map,
        center: [77.52754575, 28.4573787], // Updated to your location
        zoom: 14
    });

    WildRydes.map.center = {
        latitude: 28.4573787,
        longitude: 77.52754575
    };

    WildRydes.map.extent = {
        minLat: 28.45,
        maxLat: 28.46,
        minLng: 77.52,
        maxLng: 77.54
    };

    var markerSymbol = new SimpleMarkerSymbol({
        color: [226, 119, 40],
        outline: {
            color: [255, 255, 255],
            width: 2
        }
    });

    WildRydes.map.selectedPoint = null;

    view.on('click', function (event) {
        var point = new Point({
            longitude: event.mapPoint.longitude,
            latitude: event.mapPoint.latitude
        });

        var graphic = new Graphic({
            geometry: point,
            symbol: markerSymbol
        });

        view.graphics.removeAll();
        view.graphics.add(graphic);

        WildRydes.map.selectedPoint = {
            latitude: point.latitude,
            longitude: point.longitude
        };

        $(WildRydes.map).trigger('pickupChange');
    });

    WildRydes.map.unsetLocation = function unsetLocation() {
        view.graphics.removeAll();
        WildRydes.map.selectedPoint = null;
    };

    WildRydes.map.animate = function animate(origin, dest, callback) {
        // Dummy animation for now
        callback();
    };
});
