import { AfterViewInit, Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit{

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
