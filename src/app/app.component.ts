import { Component } from '@angular/core';
import { SocketIOService } from './socket-io.service';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <hr>
      Send Text Message
      <button (click)='SendMessage()' >Send Message</button>
      <hr>
      file content
      <input [(ngModel)]="content" >
      <button (click)='UploadFile()'>Upload</button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'socket-tester';
  content = 'hello world!'
  constructor(private socketService: SocketIOService) { }
  ngOnInit() {
    this.socketService.setupSocketConnection();
  }
  SendMessage() {
    this.socketService.sendMessage('Hello From Angular');
  }
  UploadFile() {
    var blob = new Blob([this.content], { type: "text/plain;charset=utf-8" });
    this.socketService.sendFile({ blob, name: `file-${Date.now()}.txt` });
  }
}
