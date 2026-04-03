export default class CustomWebsocket {
    private websocket: WebSocket | null;

    constructor() {
        this.websocket = null;
    }

    connect(url: string): void {
        if (!this.websocket) {
            this.websocket = new WebSocket(url);
        }
    }

    disconnect(): void {
        if (this.websocket) {
            this.websocket.close();
            this.websocket = null;
        }
    }

    send(message: string): void {
        if (this.websocket) {
            this.websocket.send(JSON.stringify(message));
        }
    }

    on(eventName: string, callback: any): void {
        if (this.websocket) {
            this.websocket.addEventListener(eventName, callback);
        }
    }
}
