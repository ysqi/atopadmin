import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { DataResolver } from './app.resolver';

import { IndexComponent} from   './components/index/index.component';
import { Error404Component} from   './components/error/error-404.component';


export const ROUTES: Routes = [
  { path: '', redirectTo:'index',    pathMatch: 'full'},
  { path: 'index',      component: IndexComponent },
  { path:'**',redirectTo:'error404'},
  { path:'error404',component:Error404Component}
];
