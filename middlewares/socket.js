const fs = require('fs');
module.exports = (http) => {
	const server = require('socket.io')(http, {
		cors: {
			origin: "*",
			methods: '*'
		}
	});

	var Data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

	var ActiveCount = 0;
	server.on('connection', (socket) => {
		ActiveCount++;
		console.log('Current active Connection: ', ActiveCount);
		server.emit('syncData', Data);

		socket.on('element', (message) => {
			server.emit('element', message);
		});

		socket.on('updateScore', (message) => {
			let { target, value } = message;

			Data[`Team${target}`]['Score'] = Number(value);

			server.emit('syncData', Data);

			let data = JSON.stringify(Data);
			fs.writeFileSync('./data.json', data);
		});

		socket.on('updateName', (message) => {
			let { target, value } = message;

			Data[`Team${target}`]['Name'] = value;

			server.emit('syncData', Data);

			let data = JSON.stringify(Data);
			fs.writeFileSync('./data.json', data);
		});

		socket.on('resetSystem', (message) => {
			switch (message) {
				case "score":
					Data.TeamA.Score = 0;
					Data.TeamB.Score = 0;
					break;

				default:
					Data = {
						"TeamA": {
							"Score": 0,
							"Name": ""
						},
						"TeamB": {
							"Score": 0,
							"Name": ""
						},
						"Sponsors": [
							{
								"Logo": {
									"src": "/uploads/sponsors/SKRLogo-NoBackground.png"
								}
							},
							{
								"Logo": {
									"src": "/uploads/sponsors/AVELogo-RedNoBackground.png"
								}
							},
							{
								"Logo": {
									"src": "/uploads/sponsors/SKRStream.jpg"
								}
							},
							{
								"Logo": {
									"src": "/uploads/sponsors/PRLogo-PinkWithText.png"
								}
							}
						]
					}
					break;
			}

			server.emit('syncData', Data);

			let data = JSON.stringify(Data);
			fs.writeFileSync('./data.json', data);
		});

	})
};