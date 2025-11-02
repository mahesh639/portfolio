import { AfterViewInit, Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements AfterViewInit {

  projects = [
    {
      title: 'Optimization of Claims Resolution Platform',
      image: '/assets/picture2.webp',
      details: [
        'Designed a user-friendly claims resolution interface for ahealthcare payers website, ensuring accessibility and a streamlined filing process for patients.',
        'This resulted in a Quantifiable Improvement , increase insuccessful claim submissions and improved patient satisfactionwith the appeals process.'
      ],
      tech: 'Angular · .NET Framework · SQL Server · Firebase · CI/CD',
      liveDemo: '#',
      code: '#'
    },
    {
      title: 'TravelAway Website',
      image: '/assets/picture1.jpg',
      details: [
        'TravelAway is a comprehensive full-stack application designedto streamline travel management and booking processes forcustomers and employees.',
        'It integrates advanced technologies in the frontend and backend to provide a seamless, user-friendly experience. This project demonstrates expertise in software architecture, full-stack development, and database management.'
        
      ],
      tech: 'Angular · TypeScript · CSS3 · GitHub Pages',
      liveDemo: '#',
      code: '#'
    }
  
  ];

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
