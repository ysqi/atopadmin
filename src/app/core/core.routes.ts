import { Routes, RouterModule } from '@angular/router'; 
import { Error404Component} from   './error/error-404.component';

export const CoreRoutes: Routes = [ 
  { path:'**',redirectTo:'error404'},
  { path:'error404',component:Error404Component}
];
