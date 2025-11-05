import { AfterViewInit, Component,ElementRef } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit{

  skills= environment.skills;

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
