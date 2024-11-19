import { Component, signal } from '@angular/core';
import { Knowledge } from '../interface/knowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

    public listIcons = signal<Knowledge[]>([
      {
        src: 'assets/icons-knowledge/html.svg',
        alt: 'Ícone de conhecimento html',
        name: 'Html5'
      },
      {
        src: 'assets/icons-knowledge/css.svg',
        alt: 'Ícone de conhecimento css',
        name: 'CSS'
      },
      {
        src: 'assets/icons-knowledge/angular.svg',
        alt: 'Ícone de conhecimento angular',
        name: 'Angular'
      },
      {
        src: 'assets/icons-knowledge/java.svg',
        alt: 'Ícone de conhecimento java',
        name: 'Java'
      },
      {
        src: 'assets/icons-knowledge/spring-boot.svg',
        alt: 'Ícone de conhecimento spring-boot',
        name: 'Spring-boot'
      },
      {
        src: 'assets/icons-knowledge/mysql.svg',
        alt: 'Ícone de conhecimento mysql',
        name: 'MySQL'
      }
    ])

}
