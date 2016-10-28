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

var routes = [
    {
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
    },
    {
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
                    "-37.839515",
                    "144.997443"
                ],
            "name": "307 Toorak Rd, South Yarra VIC 3141"
        }
    },
    {
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
                    "-37.838956",
                    "144.992600"
                ],
            "name": "175 Toorak Rd, South Yarra VIC 3141"
        }
    },
    {
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
                    "-37.838792",
                    "144.988808"
                ],
            "name": "68 Toorak Rd, South Yarra VIC 3141"
        }
    },
    {
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
                    "-37.841111",
                    "144.994697"
                ],
            "name": "4A Bond St, South Yarra VIC 3141"
        }
    },
    {
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
                    "-37.837953",
                    "144.995713"
                ],
            "name": "641 Chapel St, South Yarra VIC 3141"
        }
    }
];

function initialize(){
    var from = user.start_location.name;
    $('.from p').html(from);
    var to = user.end_location.name;
    $('.to p').html(to);
    var time = user.startTime;
    $('.time p').html(time);
    var latitude = user.start_location.location[0];
    var longitude = user.start_location.location[1];
    var range = 2;
    var latlng = new google.maps.LatLng(latitude, longitude); //you can use any location as center on map startup
    var myOptions = {
        zoom: 14,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        title: from,
        map: map
    });

    setMarkers(map);

}

function setMarkers(map){
    var bounds = new google.maps.LatLngBounds();
    var imgIcon = 'img/Car.png';
    for( i = 0; i < routes.length; i++ ) {
        var passangerId = user.driverId;
        var driverId = routes[i].driverId;
        var routeId = routes[i].id;

        var position = new google.maps.LatLng(routes[i].start_location.location[0], routes[i].start_location.location[1]);
        bounds.extend(position);
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: imgIcon,
            title: routes[i].start_location.name
        });

        var infowindow = new google.maps.InfoWindow({
            content: infocontent,

            // Assign a maximum value for the width of the infowindow allows
            // greater control over the various content elements
            maxWidth: 350
        });

        var infocontent = '<div id="iw-container">' +
            '<div class="iw-title">Driver Route</div>' +
            '<div class="iw-content">' +
            '<div class="iw-subTitle">Start Location</div>' +
            '<p>'+ routes[i].start_location.name +'</p>' +
            '<div class="iw-subTitle">End Location</div>' +
            '<p>'+ routes[i].end_location.name +'</p>' +
            '<div class="iw-subTitle">Start Time</div>' +
            '<p>'+ routes[i].startTime +'</p>' +
            '<div class="iw-button"><a class="btn btn-active" onclick="acceptRide(\''+driverId+'\', \''+routeId+'\', \''+passangerId+'\')">Accept Ride</a></div>' +
            '</div>';
        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.open(map,marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);


    }
}

function acceptRide(driverId, routeId, passangerId){
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8081/pat',
        crossDomain: true,
        dataType: 'json',
        success: function(responseData, textStatus, jqXHR) {
            alert(responseData.length);
        },
        error: function (responseData, textStatus, errorThrown) {
            alert('POST failed.');
        }
    });
}
