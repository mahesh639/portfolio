import { AfterViewInit, Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
   onSubmit() {
    alert('Message sent successfully!');
  }

  name = '';
  email = '';
  message = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    const sections = this.el.nativeElement.querySelectorAll('.section');
    sections.forEach((section: HTMLElement) => observer.observe(section));
  }

}
