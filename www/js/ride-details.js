var user = {
    "isNew": false,
    "driverId": "123455",
    "end_location":
    {
        "location":
            [
                "-37.850821",
                "145.10048600000005"
            ],
        "name": "118 Burwood Highway, Burwood, Victoria, Australia"
    },
    "id": "a312dee5-1b95-4338-b1b9-45cc58542c6c",
    "maxPassengers": "0",
    "passengers":
        [
        ],
    "startTime": "Thu, 27 Oct 2016 21:34:13 GMT",
    "start_location":
    {
        "location":
            [
                "-37.838907",
                "144.99217250000004"
            ],
        "name": "South Yarra, Victoria, Australia"
    }
};

var driver = {
    "isNew": false,
    "driverId": "123455",
    "end_location":
    {
        "location":
            [
                "-37.850821",
                "145.10048600000005"
            ],
        "name": "118 Burwood Highway, Burwood, Victoria, Australia"
    },
    "id": "a312dee5-1b95-4338-b1b9-45cc58542c6c",
    "maxPassengers": "0",
    "passengers":
        [
        ],
    "startTime": "Thu, 27 Oct 2016 21:34:13 GMT",
    "start_location":
    {
        "location":
            [
                "-37.840597",
                "144.995186"
            ],
        "name": "569 Chapel St, South Yarra VIC 3141"
    }
};

function initialize(){
    var from = driver.start_location.name;
    $('.from p').html(from);
    var to = driver.end_location.name;
    $('.to p').html(to);
    var time = driver.startTime;
    $('.time p').html(time);
    var pointA = new google.maps.LatLng(driver.start_location.location[0], driver.start_location.location[1]),
        pointB = new google.maps.LatLng(driver.end_location.location[0], driver.end_location.location[1]),
        myOptions = {
            zoom: 7,
            center: pointA
        };
       var map = new google.maps.Map(document.getElementById('map'), myOptions),
    // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        }),
        markerA = new google.maps.Marker({
            position: pointA,
            title: "point A",
            label: "A",
            map: map
        }),
        markerB = new google.maps.Marker({
            position: pointB,
            title: "point B",
            label: "B",
            map: map
        });

    // get route from A to B
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
        origin: pointA,
        destination: pointB,
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
