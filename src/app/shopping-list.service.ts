import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppingList = [];

  constructor() { }


  getShoppingList(){
    return this.shoppingList;
  }

  
}
