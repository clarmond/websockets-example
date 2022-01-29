const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

server.listen(3000, () => {
	console.log(`listening on http://localhost:${port}`);
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/frontend/html/index.html');
});

io.on('connection', (socket) => {
	console.log('A user connected');

	socket.on('send test', () => {
		console.log('Test signal received.  Sending acknowledgement.');
		io.emit('test ack');
	});
});
