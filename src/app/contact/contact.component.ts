import { AfterViewInit, Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  onSubmit() {
    alert('Message sent successfully!');
  }

  name = '';
  email = '';
  message = '';

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
        { threshold: 0.4 }
      );
  
      const elements = this.el.nativeElement.querySelectorAll('.section');
      elements.forEach((el: HTMLElement) => observer.observe(el));
    }

}
