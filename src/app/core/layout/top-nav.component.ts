
import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-topnav',  
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent  {

  @Output() onToggleMenu = new EventEmitter<boolean>();
  isSmall=false;

  toggleMenu(){
     this.isSmall=!this.isSmall;
     this.onToggleMenu.emit(this.isSmall); 
  }
  
}
