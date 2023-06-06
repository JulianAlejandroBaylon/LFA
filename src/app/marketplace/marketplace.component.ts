import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
})
export class MarketplaceComponent {
  showAll: boolean = true;
  showLegendary: boolean = false;
  showRare: boolean = false;
  showFanatic: boolean = false;
  showNormal: boolean = false;

  // ...

  all() {
    this.showAll = true;
    this.showLegendary = false;
    this.showRare = false;
    this.showFanatic = false;
    this.showNormal = false;
  }

  legendary() {
    this.showAll = false;
    this.showLegendary = true;
    this.showRare = false;
    this.showFanatic = false;
    this.showNormal = false;
  }

  rare() {
    this.showAll = false;
    this.showLegendary = false;
    this.showRare = true;
    this.showFanatic = false;
    this.showNormal = false;
  }

  fanatic() {
    this.showAll = false;
    this.showLegendary = false;
    this.showRare = false;
    this.showFanatic = true;
    this.showNormal = false;
  }

  normal() {
    this.showAll = false;
    this.showLegendary = false;
    this.showRare = false;
    this.showFanatic = false;
    this.showNormal = true;
  }
}
