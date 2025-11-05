import { Component, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileOpen = false;
  isHidden = false;
  lastScrollTop=0;
  toggleMobile() { this.mobileOpen = !this.mobileOpen }
  closeMobile() { this.mobileOpen = false }

  resume = environment.resume;

  // constructor(private el: ElementRef) { }

  // ngAfterViewInit() {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('visible');
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );

  //   const projectElements =
  //     this.el.nativeElement.querySelectorAll('.navbar');
  //   projectElements.forEach((el: HTMLElement) => observer.observe(el));
  // }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop && currentScroll > 80) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768 && this.mobileOpen) {
      this.mobileOpen = false;
    }
  }




}
