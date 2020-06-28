import { Component } from '@angular/core';
import items from './_files/items.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';

  array_items = [];
  cartItems = 0


  public itemList: { name: string }[] = items;

  ClickButton() {
    console.log(this.array_items)
    alert("Your order is placed, you can pay the bill at the counter");
  }

  AddItem(id) {
    this.array_items.push(id);
    this.cartItems = this.array_items.length
  }

  DeleteItem(id) {
    this.array_items = this.array_items.filter(function (value) { return value !== id; });
    this.cartItems = this.array_items.length
  }





}
