const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
const btn = document.querySelector('.btn');

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
    setStatus('ONLINE12');
    console.log('top');
}
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(input.value);
    ws.send(input.value);
    input.value = '';
})
btn.addEventListener('click', () => {
    console.log(input.value);
    ws.send(input.value);
    input.value = '';
})

ws.onclose = () => setStatus('disconnected');

ws.onmessage = response => printMessage(response.data);