import { NgModule }             from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { Error404Component} from   './error/error-404.component';

 const coreRoutes: Routes = [ 
  { path:'error404', component:Error404Component},
  
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }