import { Component, Input } from "@angular/core";
import { ChatService } from "../chat.service";

declare var require: any;

export interface BotMessage {
  avatar: string;
  name: string;
  body: string;
}

@Component({
  selector: "reverseBot",
  inputs: ["reversebotmessageList"],
  template: ""
})
export class ReverseBot {
  initMessage = {
    avatar: "https://robohash.org/utnihilexplicabo.png?size=50x50&set=set1",
    name: "Reverse Bot",
    body: "I will reverse everything you say"
  };

  @Input()
  reversebotmessageList: Array<BotMessage>;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    let initial_reversebot_message = this.initMessage;

    console.log(initial_reversebot_message);
    this.reversebotmessageList.push(this.initMessage);

    this.chatService.messages.subscribe(msg => {
      console.log("msg received by reverse bot is: ");
      console.log(msg);
      console.log("message from reverse bot");
      let reversebot = new ReverseBot(this.chatService);
      let sentence = reversebot.reverse(JSON.parse(msg.text)["body"]);
      let reversebot_message = {
        avatar: "https://robohash.org/utnihilexplicabo.png?size=50x50&set=set1",
        name: "reverse-bot",
        body: sentence
      };
      this.reversebotmessageList.push(reversebot_message);
    });
  }

  reverse(msg) {
    return msg
      .split("")
      .reverse()
      .join("");
    //return msg.reverse();
  }

  sendMessage(msg) {
    let message = {
      avatar: "https://robohash.org/utnihilexplicabo.png?size=50x50&set=set1",
      sender: "reverse-bot",
      body: msg
    };
    //TODO send the above message
  }
}
