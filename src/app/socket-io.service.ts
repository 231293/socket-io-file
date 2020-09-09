import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  socket;
  constructor() { }
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    this.socket.on('onMsgReceived', (args) => {
      console.log('message received by server', args)
    })

    this.socket.on('onFileReceived', (args) => {
      console.log('file received by server', args)
    })
  }

  sendMessage(msg) {
    this.socket.emit('newMessage', msg);
  }

  sendFile(options) {
    this.socket.emit('saveFile', options);
  }
}
