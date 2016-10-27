$( document ).ready(function(){	
	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:8081/users',
		crossDomain: true,
		dataType: 'json',
		success: function(responseData, textStatus, jqXHR) {
			alert(responseData.length);
		},
		error: function (responseData, textStatus, errorThrown) {
			alert('POST failed.');
		}
	});
});