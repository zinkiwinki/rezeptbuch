import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  shoppingList: any[] = [];

  constructor() {}

  getShoppingList() {
    let sumList = [];
    let index = 0;
    for (let name in this.shoppingList) {
      sumList[index] =  this.shoppingList[name];
      index++;
    }
    return sumList;
  }

  add(ingredients) {
    let shoppingList = this.shoppingList || [];
    for (let i = 0; i < ingredients.length; i++) {
      let ingredient = ingredients[i];
      if (!shoppingList[ingredient.name]) {
        shoppingList[ingredient.name] = ingredient;
      }else{
        let amount = ingredient.amount;
        shoppingList[ingredient.name].amount += amount;
      }
    }
    this.shoppingList = shoppingList;
  }
}
