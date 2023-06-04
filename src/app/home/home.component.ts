import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  expanded = false; // Variable para controlar el estado de la sección
  buttonText = 'Load More'; // Texto inicial del botón

  toggleSection() {
    this.expanded = !this.expanded;

    if (this.expanded) {
      this.buttonText = 'Mostrar menos';
    } else {
      this.buttonText = 'Load More';
    }
  }
  selectedPart: string = 'part1';

  changeContent(part: string) {
    this.selectedPart = part;
  }
}
