import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {

  shouldShowItem(x: number): boolean {
    return x <= 3;
  }
  num: Number [] = [0, 1, 2, 3, 4, 5, 6, 7]
  ciclo: Number[] = [0, 1]

  images: String [] = [
    '/assets/images/0101.png',
    '/assets/images/0202.png',
    '/assets/images/0303.png',
    '/assets/images/0404.png',
    '/assets/images/0505.png',
    '/assets/images/0606.png',
    '/assets/images/0707.png',
    '/assets/images/0808.png',
  ]

  text: any ={
    0: {
      type: "Raro #0101",
      title: "LUIS TONOCO",
      desc: "Assist - Dec 07 2022, Base set (Series 4), Vortex, CHI",
      low: "Lowest ASK",
      price: "USD $1.00",
      avg: "AVG sale",
      avgP: "USD $1.05"
    },
    1: {
      type: "Raro #0101",
      title: "LUIS TONOCO",
      desc: "Assist - Dec 07 2022, Base set (Series 4), Vortex, CHI",
      low: "Lowest ASK",
      price: "USD $1.00",
      avg: "AVG sale",
      avgP: "USD $1.05"
    },
    2: {
      type: "Raro #0101",
      title: "LUIS TONOCO",
      desc: "Assist - Dec 07 2022, Base set (Series 4), Vortex, CHI",
      low: "Lowest ASK",
      price: "USD $1.00",
      avg: "AVG sale",
      avgP: "USD $1.05"
    },
    3: {
      type: "Raro #0101",
      title: "LUIS TONOCO",
      desc: "Assist - Dec 07 2022, Base set (Series 4), Vortex, CHI",
      low: "Lowest ASK",
      price: "USD $1.00",
      avg: "AVG sale",
      avgP: "USD $1.05"
    },
    4: {
      type: "Raro #0101",
      title: "LUIS TONOCO",
      desc: "Assist - Dec 07 2022, Base set (Series 4), Vortex, CHI",
      low: "Lowest ASK",
      price: "USD $1.00",
      avg: "AVG sale",
      avgP: "USD $1.05"
    },
    5: {
      type: "Raro #0101",
      title: "LUIS TONOCO",
      desc: "Assist - Dec 07 2022, Base set (Series 4), Vortex, CHI",
      low: "Lowest ASK",
      price: "USD $1.00",
      avg: "AVG sale",
      avgP: "USD $1.05"
    },
    6: {
      type: "Raro #0101",
      title: "LUIS TONOCO",
      desc: "Assist - Dec 07 2022, Base set (Series 4), Vortex, CHI",
      low: "Lowest ASK",
      price: "USD $1.00",
      avg: "AVG sale",
      avgP: "USD $1.05"
    },
    7: {
      type: "Raro #0101",
      title: "LUIS TONOCO",
      desc: "Assist - Dec 07 2022, Base set (Series 4), Vortex, CHI",
      low: "Lowest ASK",
      price: "USD $1.00",
      avg: "AVG sale",
      avgP: "USD $1.05"
    },

  }
  }
