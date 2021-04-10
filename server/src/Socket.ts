import * as WebSocket from "ws";
import { ServerClientPayload } from "./Protocol";

export class SocketServer {
  server: WebSocket.Server;

  constructor(port: number, callback: (ws: WebSocket) => void) {
    this.server = new WebSocket.Server({
      port: port,
    });

    this.server.on("connection", callback);
  }

  broadcast(payload: ServerClientPayload) {
    this.server.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(payload));
      }
    });
  }
}
