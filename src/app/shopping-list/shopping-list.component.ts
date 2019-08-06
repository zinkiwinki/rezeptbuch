import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {}
  deleteShoppingList() {}

  getShoppingList() {
    let rawList = this.shoppingListService.getShoppingList();

    let orderedList = [];

    for (let i = 0; i < rawList.length; i++) {
      let element = rawList[i];
      if (!orderedList[element.category]) {
        orderedList[element.category] = [];
      }
      orderedList[element.category].push(element);
    }

    let categorizedList = [];
    let index = 0;
    for (let category in orderedList) {
      categorizedList[index] = {
        category: category,
        ingredients: orderedList[category],
      };
      index++;
    }
    this.shoppingList = categorizedList;
    console.log(categorizedList);
  }

  ngOnInit() {
    this.getShoppingList();
  }
}
