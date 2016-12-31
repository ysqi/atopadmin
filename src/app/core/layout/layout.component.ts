import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
    // moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit, AfterViewInit {
    constructor() { }

    ngOnInit() { }
    ngAfterViewInit() {
        this.setContentHeight();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.setContentHeight();
    }
    
    onToggleMenu() { 
        //切换大小菜单
        var $BODY = $('body'),
            $MENU_TOGGLE = $('#menu_toggle'),
            $SIDEBAR_MENU = $('#sidebar-menu');
        if ($BODY.hasClass('nav-md')) {
            $SIDEBAR_MENU.find('li.active ul').hide();
            $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            $SIDEBAR_MENU.find('li.active-sm ul').show();
            $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $BODY.toggleClass('nav-md nav-sm');

        //重置内容页大小
        this.setContentHeight();
    }

    /**
     * 重置内容页大小
     */
    setContentHeight() {
        var $BODY = $('body'),
            $LEFT_COL = $('.left_col'),
            $RIGHT_COL = $('.right_col'),
            $NAV_MENU = $('.nav_menu'),
            $SIDEBAR_FOOTER = $('.sidebar-footer'),
            $FOOTER = $('footer');
        // reset height
        $RIGHT_COL.css('min-height', $(window).height());

        var bodyHeight = $BODY.outerHeight(),
            footerHeight = $BODY.hasClass('footer_fixed') ? 0 : $FOOTER.height(),
            leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
            contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // normalize content
        contentHeight -= $NAV_MENU.height() + footerHeight+30;

        $RIGHT_COL.css('min-height', contentHeight);
    };
}