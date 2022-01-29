const host = location.host;
const socket = io(host);

function testConnection() {
	console.log('Sending test message');
	socket.emit('send test');
}

socket.on('test ack', () => {
	console.log('Test signal received');
});
