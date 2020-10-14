import { Component, Input } from "@angular/core";
import { ChatService } from "../chat.service";

declare var require: any;

export interface BotMessage {
  avatar: string;
  name: string;
  body: string;
}

@Component({
  selector: "countBot",
  inputs: ["countbotmessageList"],
  template: ""
})
export class CountBot {
  initMessage = {
    avatar: "https://robohash.org/esseeiusnisi.jpg?size=50x50&set=set1",
    name: "Count Bot",
    body: "I will count the characters in your message"
  };

  @Input()
  countbotmessageList: Array<BotMessage>;
  //countbotmessageList: [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    console.log(this);
    let initial_countbot_message = this.initMessage;

    console.log(initial_countbot_message);
    console.log(this.countbotmessageList);
    this.countbotmessageList.push(this.initMessage);

    this.chatService.messages.subscribe(msg => {
      console.log("msg received by count bot is: ");
      console.log(msg);
      console.log("message from countbot");
      let countbot = new CountBot(this.chatService);
      let sentence = countbot.count(JSON.parse(msg.text)["body"]);
      let countbot_message = {
        avatar: "https://robohash.org/esseeiusnisi.jpg?size=50x50&set=set1",
        name: "count-bot",
        body: sentence
      };
      this.countbotmessageList.push(countbot_message);
    });
  }

  count(msg) {
    //TODO count characters in message

    return "Number of characters: " + msg.length;
  }

  // not used, this scope messy
  sendMessage(sentence) {
    let countbot_message = {
      avatar: "https://robohash.org/esseeiusnisi.jpg?size=50x50&set=set1",
      name: "count-bot",
      body: sentence
    };

    //TODO send the above message
    this.chatService.sendMsg(countbot_message);
  }
}
