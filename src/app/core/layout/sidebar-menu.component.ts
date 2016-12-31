
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { AuthService } from '../../services/auth.service'
import { MenuData } from '../../data/menu';

declare var $: any;

@Component({
    // moduleId: module.id,
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html'
})
export class SidebarMenuComponent implements OnInit {
    menus: MenuData[];
    activeMenu: MenuData;

    constructor(private authService: AuthService,private router: Router) { 
     }

    ngOnInit(){
        this.authService.getUserMenus().then(menus=>  {
            this.menus=menus; 
        }); 
    } 

    isActive(menu: MenuData): boolean {
        if (this.activeMenu!=null &&  this.activeMenu.id===menu.id){
            return true;
        }
        //如果是父节点
        if (menu.subItems && menu.subItems.length>0){
             menu.subItems.forEach(sub=>{
                 if ( this.isActive(sub) ){
                     return true;
                 }
             }) 
        }
        if (this.router.url===menu.url) { 
            return true;
        }
        return false;
    }
    /**
     * 切换选中项菜单
     */
    onClickMenu(menu:MenuData){
        if (this.isActive(menu)){
            this.activeMenu=null;
        }else{ 
            this.activeMenu=menu; 
        }
    }
    /**
     * 确定菜单项样式
     */
    getMenuLiClass(menu:MenuData){ 
        return  this.isActive(menu) ? 'active active-sm':'';  
    } 

}
