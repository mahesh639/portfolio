import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  //formData: any;

  onSubmit() {
    const subject = encodeURIComponent('Portfolio Contact Message');
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nMessage: ${this.formData.message}`
    );

    // Replace this email with your own
    const mailto = `mailto:maheshgouda625@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }

   formData = {
    name: '',
    email: '',
    message: ''
  };


  constructor(private el: ElementRef) { }

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
