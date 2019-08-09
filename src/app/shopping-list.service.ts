import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  // the shoppingList prop is of type any, because i do not want that this is an subscribable observable
  shoppingList: any[] = [];

  constructor() {}

  // the getShoppingList method sorts the assoc array into an indexed array for displaying it
  getShoppingList() {
    let sumList = [];
    let index = 0;
    for (let name in this.shoppingList) {
      sumList[index] =  this.shoppingList[name];
      index++;
    }
    return sumList;
  }

  // This Method is for deleting the shopping list
  deleteShoppingList(){
    this.shoppingList = [];
  }

  // the add method sorts all added ingredients by their category
  // the shoppingList property will be an assoc array, to avoid the same ingredient multiple times
  // the amount will also be counted
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
