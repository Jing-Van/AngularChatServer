import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Task2Component } from "./task2.component";
import { CommonModule } from "@angular/common";

export const routes = [
  { path: "", component: Task2Component, pathMatch: "full" }
];

@NgModule({
  declarations: [Task2Component],
  providers: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Task2Module {
  static routes = routes;
}
