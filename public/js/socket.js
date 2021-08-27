const socket = io();



socket.on('syncData', data => {
	ScoreA.value = data.ScoreA;
});
socket.on('updateScoreA', data => {
	ScoreA.value = data.ScoreA;
});



document.getElementById('ScoreA-Decrease').addEventListener('click', (event) => {
	socket.emit('updateScoreA', Number(document.getElementById('ScoreA').value) - 1);
})
document.getElementById('ScoreA-Increase').addEventListener('click', (event) => {
	socket.emit('updateScoreA', Number(document.getElementById('ScoreA').value) + 1);
})

document.getElementById('ScoreA').addEventListener('change', (event) => {
	socket.emit('updateScoreA', Number(event.target.value));
})