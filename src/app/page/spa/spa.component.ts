import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge/knowledge.component';
import { ProjectsComponent } from '../../components/projects/projects/projects.component';
import { ContactComponent } from '../../components/footer-contact/contact/contact.component';

@Component({
  selector: 'app-spa',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ProjectsComponent, ContactComponent],
  templateUrl: './spa.component.html',
  styleUrl: './spa.component.scss'
})
export class SpaComponent {

}
