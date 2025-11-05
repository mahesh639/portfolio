import { AfterViewInit, Component,ElementRef } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
   onSubmit() {
    alert('Message sent successfully!');
  }

  myname = environment.name;
  tagline = environment.tagLine;
  homeAbout = environment.homeAbout;
  experience = environment.experienceNotes;
  skills = environment.skills;
  projects = environment.projects;
  
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
