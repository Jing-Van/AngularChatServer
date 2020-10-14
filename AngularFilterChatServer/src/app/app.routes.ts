import {Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import { AuthGuard } from './_guards';
import { RegisterComponent } from './register';

export const ROUTES: Routes = [

  {path: '', redirectTo: 'app', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'app', loadChildren: './layout/layout.module#LayoutModule'},
  {path: 'login', component: LoginComponent }, 
  {path: 'register', component: RegisterComponent },

];