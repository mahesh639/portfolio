import { AfterViewInit, Component,ElementRef } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements AfterViewInit {

  projects = environment.projects;

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
      this.el.nativeElement.querySelectorAll('.project');
    projectElements.forEach((el: HTMLElement) => observer.observe(el));
  }

}
