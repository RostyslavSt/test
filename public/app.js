const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localhost:3003');
function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}

ws.onopen = () => {
    setStatus('ONLINE');
    console.log('d232323d');
}
// ws.onopen = () => console.log('dwdwd');

ws.onclose = () => setStatus('disconnected');

ws.onmessage = response => printMessage(response.data);