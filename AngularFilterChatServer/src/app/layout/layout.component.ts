import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {Router} from '@angular/router';

declare var require: any;

@Component({
  selector: 'app-layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.template.html',
  styleUrls: ['./layout.style.scss']
})
export class LayoutComponent {

  omegaLogo = require('../../assets/img/04_crop.png');
}
