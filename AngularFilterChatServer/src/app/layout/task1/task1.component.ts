import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Item } from "./task1.item";
import { Observable } from "rxjs";

declare var require: any;

@Component({
  selector: "task1",
  templateUrl: "./task1.template.html",
  styleUrls: ["./task1.style.scss"]
})
export class Task1Component implements OnInit {
  omegaLogo = require("../../../assets/img/04_crop.png");
  target = require("../../../assets/targets/task1.png");

  items: Array<Item>;

  constructor(private http: Http) {}

  mockData = [];

  showPreview = false;

  ngOnInit() {
    this.http
      .get("http://localhost:4200/assets/img/MOCK_DATA_USER.json")
      .map(data => data.json() as Array<Item>)
      .subscribe(data => {
        this.items = data;
        console.log(data);
      });
  }

  loadData() {
    //TODO load mockData
  }

  filterArray(event) {
    //TODO filter data by column inputs
  }
}
