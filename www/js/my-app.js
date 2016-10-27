$.material.init();

var apiEndpoint='http://127.0.0.1:8081';

// socket.io specific code
var socket = io.connect(apiEndpoint);

socket.on('connect', function () {
$('.alert a').text('connected');
});

socket.on('announcement', function (msg) {
$('#lines').append($('<p>').append($('<em>').text(msg)));
});

