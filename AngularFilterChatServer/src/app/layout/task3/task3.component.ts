import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'task3',
  templateUrl: './task3.template.html',
  styleUrls: ['./task3.style.scss']
})
export class Task3Component {
  omegaLogo = require('../../../assets/img/04_crop.png');
  target_1 = require('../../../assets/targets/task3_1.png');
  target_2 = require('../../../assets/targets/task3_2.png');
}

// todo, beautify css of the logout