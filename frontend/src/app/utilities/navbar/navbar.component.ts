import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  darkmode: boolean = false

  switchTheme() {
    this.darkmode = !this.darkmode
    if (this.darkmode) {
      document.querySelector('html')?.setAttribute('data-bs-theme', 'dark');
    } else {
      document.querySelector('html')?.setAttribute('data-bs-theme', 'light');
    }
  }
}
