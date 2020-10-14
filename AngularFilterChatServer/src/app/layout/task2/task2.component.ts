import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Item } from "./task2.item";
import "rxjs/add/operator/map";

import { Pipe, PipeTransform } from "@angular/core";

declare var require: any;

@Component({
  selector: "task2",
  templateUrl: "./task2.template.html",
  styleUrls: ["./task2.style.scss"]
})
export class Task2Component implements OnInit {
  title = "Omega";
  target = require("../../../assets/targets/task2.png");
  mockData = [];
  shoppingCart = [];
  totalValue = 0;
  mockCurrency = "GBP";

  items: Array<Item>;

  constructor(private http: Http) {}

  mockSelection = [
    { id: 1, amount: 1 },
    { id: 3, amount: 2 },
    { id: 14, amount: 11 },
    { id: 15, amount: 1 },
    { id: 26, amount: 7 },
    { id: 39, amount: 3 }
  ];

  showPreview = false;

  IDS = [1, 3, 14, 15, 26, 39];

  // If regards purely about the performance of this task,
  // it would be more efficient to filter out the sub list of products during the return of the
  // json return acquired from the api call

  increment(i, mockSelection) {
    console.log(mockSelection[i]["amount"]);
    mockSelection[i]["amount"] += 1;
  }

  decrement(i, mockSelection) {
    console.log(mockSelection[i]);

    mockSelection[i]["amount"] -= 1;
  }

  ngOnInit() {
    var self = this;

    function getValues(hash) {
      console.log("hash");
      console.log(hash);
      var values = [];
      for (var item in hash) {
        // Ensure that the `key` is actually a member of the hash and not
        // a member of the `prototype`.
        // see: http://javascript.crockford.com/code.html#for%20statement
        console.log(hash[item]);
        if (hash[item].hasOwnProperty("id")) {
          values.push(hash[item]["id"]);
        }
      }
      return values;
    }

    var ids = getValues(this.mockSelection);

    console.log("ids");
    console.log(ids);

    console.log(" IDS ");
    console.log(this.IDS);

    // original from the task
    //this.loadData();
    console.log("on Init");
    console.log(this.mockSelection);

    this.http
      .get("http://localhost:4200/assets/img/MOCK_DATA_PRODUCTS.json")
      .map(data => data.json() as Array<Item>)
      .subscribe(data => {
        this.items = data;
        console.log(data);
        this.mockData = this.items.filter(function(i) {
          console.log(i);
          console.log(self.IDS);
          return ids.indexOf(i.id) > -1;
          //return [1, 3, 14, 15, 26, 39].indexOf(i.id) > -1
        });
        console.log("mock Data now");
        console.log(this.mockData);
      });
  }

  loadData() {
    //TODO load selected products into shopping cart
    console.log("loadData");
    this.calculateTotal();
  }

  calculateTotal() {
    console.log("calculate Total");
    var cells = document.querySelectorAll(".rowtotal");
    console.log(cells);
    //TODO calculate total price of selected products based on the amount and its unit value

    // process cell data
    var sum = 0;
    for (var i = 0; i < cells.length; i++) {
      var val = Number(cells[i].innerHTML);
      // don't use data, even though you can get the value by data from chrome
      // Property 'data' does not exist on type 'Node'.
      //var val = parseFloat(cells[i].firstChild.data);
      if (!isNaN(val)) {
        sum += val;
      }
    }

    return sum;
  }

  modifyAmount(event) {
    //TODO triggered when amount change
  }

  removeProduct(i) {
    console.log("remove product");
    //console.log("THE " i "th row to remove");
    console.log(i);
    this.mockData.splice(i, 1);
    //TODO triggered when a product is removed
  }
}
