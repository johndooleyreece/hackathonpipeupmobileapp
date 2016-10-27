
var routeFormData={
			driverId:'123455',
			maxPassengers: 0,
			startLocation:{},
			endLocation:{},
			startDate:null,
			startTime:null,
	};
	
var placeSearch, startLocationAutocomplete;

      function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        startLocationAutocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('startLocation')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        startLocationAutocomplete.addListener('place_changed', fillInStartAddress);
		
		endLocationAutocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('endLocation')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        endLocationAutocomplete.addListener('place_changed', fillInEndAddress);
      }

      function fillInStartAddress() {
        // Get the place details from the autocomplete object.
        var place = startLocationAutocomplete.getPlace();
		
		routeFormData.startLocation={name:$('#startLocation').val(), location:place.geometry.location};

       
      }
	  
	  function fillInEndAddress() {
        // Get the place details from the autocomplete object.
        var place = endLocationAutocomplete.getPlace();

        routeFormData.endLocation={name:$('#endLocation').val(), location:place.geometry.location};
      }

      // Bias the autocomplete object to the user's geographical location,
      // as supplied by the browser's 'navigator.geolocation' object.
      function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }

	  
$( document ).ready(function(){	
	$('#date').bootstrapMaterialDatePicker
	({
		time:false,
		setMinDate: new Date(),
		clearButton: true
	});
		
		
	$('#time').bootstrapMaterialDatePicker
	({
		date: false,
		shortTime: false,
		format: 'HH:mm'
	});
	
	
	$('#create-route-form').submit(function(){
		
	var date	
	
	var url=apiEndpoint+'/users';
		
		$.ajax({
			type: 'PUT',
			url: url,
			crossDomain: true,
			data: {},
			dataType: 'json',
			success: function(responseData, textStatus, jqXHR) {
				alert(responseData.length);
			},
			error: function (responseData, textStatus, errorThrown) {
				alert('POST failed.');
			}
		});
	
	});
});