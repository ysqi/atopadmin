import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { LayoutComponent } from './layout/layout.component';
import { SidebarMenuComponent} from  './layout/sidebar-menu.component';
import { SidebarTopComponent} from  './layout/sidebar-top.component';
import { FooterComponent} from  './layout/footer.component';
import { TopNavComponent} from  './layout/top-nav.component';
import { SidebarFooterComponent} from  './layout/sidebar-footer.component';

import { Error404Component} from   './error/error-404.component';

// service
import  { AuthService} from '../services/auth.service'
import { CoreRoutingModule} from './core-routing.module'


@NgModule({ 
  imports: [
    CommonModule ,
    HttpModule, 
    CoreRoutingModule 
  ],
  exports:[LayoutComponent],
  declarations: [ 
    SidebarMenuComponent,FooterComponent,TopNavComponent,SidebarTopComponent,SidebarFooterComponent,
    LayoutComponent,
    Error404Component,
  ], 
  providers: [AuthService], 
})
export class CoreModule { }
