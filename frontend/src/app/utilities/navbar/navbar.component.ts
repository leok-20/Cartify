import { Component, EventEmitter, Output } from '@angular/core';
import { CartItem } from 'src/app/models/models';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() themePicked = new EventEmitter<any>();
  darkmode: boolean = false

  cartList: CartItem[] = [
    { id: 1, name: 'Milk', amount: 1, price: 3.07 },
    { id: 2, name: 'Apples', amount: 4, price: 1.99 },
    { id: 3, name: 'Bread', amount: 2, price: 3.29 },
    { id: 4, name: 'Sushi', amount: 1, price: 12.55 }
  ]

  switchTheme() {
    this.darkmode = !this.darkmode
    if (this.darkmode) {
      document.querySelector('html')?.setAttribute('data-bs-theme', 'dark');
    } else {
      document.querySelector('html')?.setAttribute('data-bs-theme', 'light');
    }
    this.themePicked.emit(this.darkmode)
  }

  deleteItem(id: number) {
    console.log(this.cartList.findIndex((item: CartItem) => { return item.id == id }))
    this.cartList.splice(this.cartList.findIndex((item: CartItem) => { return item.id == id }), 1)
  }
}
