/*global WildRydes _config*/

var WildRydes = window.WildRydes || {};
WildRydes.map = WildRydes.map || {};

(function rideScopeWrapper($) {
    var authToken;

    WildRydes.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });

    // Request Unicorn function when a pickup location is selected
    function requestUnicorn(pickupLocation) {
        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/ride',
            headers: {
                Authorization: authToken
            },
            data: JSON.stringify({
                PickupLocation: {
                    Latitude: pickupLocation.latitude,
                    Longitude: pickupLocation.longitude
                }
            }),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occurred when requesting your unicorn:\n' + jqXHR.responseText);
            }
        });
    }

    function completeRequest(result) {
        var unicorn;
        var pronoun;
        console.log('Response received from API: ', result);
        unicorn = result.Unicorn;
        pronoun = unicorn.Gender === 'Male' ? 'his' : 'her';
        displayUpdate(unicorn.Name + ', your ' + unicorn.Color + ' unicorn, is on ' + pronoun + ' way.');
        animateArrival(function animateCallback() {
            displayUpdate(unicorn.Name + ' has arrived. Giddy up!');
            WildRydes.map.unsetLocation();
            $('#request').prop('disabled', 'disabled');
            $('#request').text('Set Pickup');
        });
    }

    // Register click handler for #request button
    $(function onDocReady() {
        $('#request').click(handleRequestClick);
        $(WildRydes.map).on('pickupChange', handlePickupChanged);

        WildRydes.authToken.then(function updateAuthMessage(token) {
            if (token) {
                displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
                $('.authToken').text(token);
            }
        });

        if (!_config.api.invokeUrl) {
            $('#noApiMessage').show();
        }
    });

    function handlePickupChanged() {
        var requestButton = $('#request');
        requestButton.text('Request Unicorn');
        requestButton.prop('disabled', false);
    }

    function handleRequestClick(event) {
        var pickupLocation = WildRydes.map.selectedPoint;
        event.preventDefault();
        requestUnicorn(pickupLocation);
    }

    // Initialize the map using ArcGIS
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/geometry/Point",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/geometry/SpatialReference",
        "dojo/domReady!"
    ], function (Map, MapView, Graphic, Point, SimpleMarkerSymbol, SpatialReference) {

        // Coordinates for Greater Noida
        var center = { lat: 28.4573787, lng: 77.52754575 };

        // Create the map
        var map = new Map({
            basemap: "streets-navigation-vector"  // Choose your preferred basemap here
        });

        // Create the map view
        var view = new MapView({
            container: "mapView", // ID of the container div
            map: map,
            center: [center.lng, center.lat], // Set center of map to Greater Noida
            zoom: 14
        });

        // Create a marker symbol for the pickup location
        var markerSymbol = new SimpleMarkerSymbol({
            color: [226, 119, 40], // Orange color
            size: 10,
            outline: {
                color: [255, 255, 255],
                width: 1
            }
        });

        // Event listener for click event on the map
        view.on("click", function (event) {
            var point = new Point({
                longitude: event.mapPoint.longitude,
                latitude: event.mapPoint.latitude,
                spatialReference: new SpatialReference({ wkid: 4326 })
            });

            // Create a graphic (marker) at the clicked point
            var pointGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol
            });

            // Remove any previous graphics and add the new one
            view.graphics.removeAll();
            view.graphics.add(pointGraphic);

            // Save the location for pickup
            WildRydes.map.selectedPoint = {
                latitude: point.latitude,
                longitude: point.longitude
            };

            // Enable the request button
            $('#request').prop('disabled', false);
            $('#request').text('Request Unicorn');
        });

    });

    // Display updates
    function displayUpdate(text) {
        $('#updates').append($('<li>' + text + '</li>'));
    }

}(jQuery));
