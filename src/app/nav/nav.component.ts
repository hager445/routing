import { Component ,HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-nav',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  nav:HTMLElement | null = null
  @HostListener('window:scroll')
  onScroll():void{
    if (window.scrollY >= 92) {
      
      this.nav = document.querySelector('.navbar') as HTMLElement;
      // this.nav.style.height = `${this.nav.offsetHeight}px`;
      this.nav.style.height = `80px`;
    }else{
      this.nav = document.querySelector('.navbar') as HTMLElement;
      // this.nav.style.height =   `${this.nav.offsetHeight + 25}px`
      this.nav.style.height =   '105px'
    }
  }

}
