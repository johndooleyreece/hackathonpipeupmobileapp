$( document ).ready(function(){	
	var url=apiEndpoint+'/users/login';
	
	
	$('#login-form').submit(function(e){
		
		e.preventDefault();
		
		var data={username:$('#email').val(), password:$('#password').val()};
		
		$.ajax({
			type: 'POST',
			url: url,
			crossDomain: true,
			data: data,
			dataType: 'json',
			success: function(responseData, textStatus, jqXHR) {
				// Put the object into storage
				localStorage.setItem('user', JSON.stringify(responseData));
			},
			error: function (responseData, textStatus, errorThrown) {
				alert('Login failed.');
			}
		});
		
		return(false);
	
	});
	
	
});