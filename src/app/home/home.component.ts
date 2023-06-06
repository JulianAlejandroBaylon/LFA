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
      this.buttonText = 'MOSTRAR MENOS';
    } else {
      this.buttonText = 'MOSTRAR MAS';
    }
  }
  selectedPart: string = 'part1';

  changeContent(part: string) {
    this.selectedPart = part;
  }
}
