import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Task4Component } from "./task4.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChatService } from "./chat.service";
import { WebsocketService } from "./websocket.service";
import { CountBot } from "./count-bot/count.bot";
import { ReverseBot } from "./reverse-bot/reverse.bot";

export const routes = [
  { path: "", component: Task4Component, pathMatch: "full" }
];

@NgModule({
  declarations: [Task4Component, CountBot, ReverseBot],
  providers: [ChatService, WebsocketService],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)]
})
export class Task4Module {
  static routes = routes;
}
