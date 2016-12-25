import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: AppComponent },
];
