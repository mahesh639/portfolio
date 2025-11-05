import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const animatedElements = this.el.nativeElement.querySelectorAll(
      '.animate-up, .animate-left, .animate-right'
    );
    animatedElements.forEach((el: any) => observer.observe(el));
  }
  title = 'mahesh_portfolio';
}
