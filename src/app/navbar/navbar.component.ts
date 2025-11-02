import { Component,AfterViewInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  mobileOpen = false;
 toggleMobile(){ this.mobileOpen = !this.mobileOpen }
 closeMobile(){ this.mobileOpen = false }

 constructor(private el: ElementRef) {}
 
    ngAfterViewInit() {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             entry.target.classList.add('visible');
           }
         });
       },
       { threshold: 0.2 }
     );
 
     const projectElements =
       this.el.nativeElement.querySelectorAll('.navbar');
     projectElements.forEach((el: HTMLElement) => observer.observe(el));
   }

}
