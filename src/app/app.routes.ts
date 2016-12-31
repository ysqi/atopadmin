import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { DataResolver } from './app.resolver';

import { IndexComponent } from './components/index/index.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
];
