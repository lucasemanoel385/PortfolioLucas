import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  lastScrollPosition = 0;
  isNavbarHidden = "translateY(0)";

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollPosition > this.lastScrollPosition) {
      this.isNavbarHidden = "translateY(-140%)";
    } else {
      this.isNavbarHidden = "translateY(0)";
    }

    this.lastScrollPosition = currentScrollPosition;
  }

}


