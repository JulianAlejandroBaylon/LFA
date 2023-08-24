import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarScrolled = (window.pageYOffset > 100);
  }
}
