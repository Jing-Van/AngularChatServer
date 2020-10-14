import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { ChatService } from "./chat.service";
import { WebsocketService } from "./websocket.service";
declare var require: any;
declare var jQuery: any;

@Component({
  selector: "task4",
  templateUrl: "./task4.template.html",
  styleUrls: ["./task4.style.scss"],
  providers: [WebsocketService, ChatService]
})
export class Task4Component implements OnInit {
  omegaLogo = require("../../../assets/img/04_crop.png");
  target = require("../../../assets/targets/task4.png");
  userAvatar = require("../../../assets/img/student.png");

  messageList = [];

  showPreview = false;

  newMessage = "";

  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    });
  }

  addMessage() {
    let message = {
      avatar: this.userAvatar,
      sender: "user",
      body: this.newMessage
    };

    this.chat.sendMsg(message);
    this.messageList.push(message);

    //TODO send the above message
    this.newMessage = "";
    //this.message.message = "";
  }
}
