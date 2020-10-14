import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Task3Component} from './task3.component';
import {CommonModule} from '@angular/common';

export const routes = [
  {path: '', component:Task3Component, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    Task3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Task3Module {
  static routes = routes;
}
