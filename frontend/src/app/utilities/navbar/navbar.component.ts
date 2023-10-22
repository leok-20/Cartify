import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() themePicked = new EventEmitter<any>();
  darkmode: boolean = false

  switchTheme() {
    this.darkmode = !this.darkmode
    if (this.darkmode) {
      document.querySelector('html')?.setAttribute('data-bs-theme', 'dark');
    } else {
      document.querySelector('html')?.setAttribute('data-bs-theme', 'light');
    }
    this.themePicked.emit(this.darkmode)
  }
}
