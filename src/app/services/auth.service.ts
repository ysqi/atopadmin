import { Injectable } from '@angular/core';
import { MenuData } from '../data/menu';

const Menus: MenuData[] = [
    {
        id: '01', title: '首页', iconClass: 'fa fa-home', url: '/index',
        // subItems: [
        //     { id: '0101', title: '面板1', url: 'index1.html' },
        //     { id: '0102', title: '面板2', url: 'index2.html' },
        // ]
    },
    {
        id: '02', title: '管理员',
        subItems: [
            { id: '0201', title: '用户管理', url: '/admin/user' },
            { id: '0202', title: '系统配置', url: '/admin/config' },
        ]
    },
    {
        id: '03', title: 'Test', iconClass:'fa fa-desktop',
        subItems: [
            { id: '0301', title: 'Test1', url: '/test/t1' },
            { id: '0302', title: 'Test2', url: '/test/t2' },
        ]
    }
];

/**
 * 权限验证服务
 */
@Injectable()
export class AuthService {

    constructor() { }

    /**
     * 获取用户可用菜单
     */
    getUserMenus(): Promise<MenuData[]> {
        return Promise.resolve(Menus);
    }
}