import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8001, host: '0.0.0.0' });
console.log('WebSocket mock server running on ws://localhost:8001.');

wss.on('connection', function connection(ws) {
    console.log('Client connected.');
    let status = 'running';
    let interval2;
    const interval = setInterval(() => {
            interval2 = setInterval(() => {
                status = 'finished';
            }, 10000);
        const messageAsJsonString = JSON.stringify({'experimentId': 'f4b802e7-1e55-49a6-ab64-2000ec2daa46', 'status': status});
        ws.send(messageAsJsonString);
        console.log('Status sent to client.');
    }, 5000);

    ws.on('close', () => {
        console.log('Client disconnected.');
        clearInterval(interval);
        if (interval2) {
            clearInterval(interval2);
        }
    });
});