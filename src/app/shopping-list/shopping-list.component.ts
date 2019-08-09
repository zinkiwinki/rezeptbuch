import { Component, OnInit, Inject } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IngredientService } from '../ingredient.service';

export interface DialogData {
  ingredient: any[];
  ingredients: any[];
  amount: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList;
  ingredients;

  constructor(public dialog: MatDialog, private ingredientService: IngredientService, private shoppingListService: ShoppingListService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(IngredientDialog, {
      width: '500px',
      data: { ingredients: this.ingredients, ingredient: [], amount: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // To delete the references of the ingredients
      // i have to do this!
      let ingredient = {
        name: result.ingredient.name,
        unit: result.ingredient.unit,
        amount: result.amount,
        category: result.ingredient.category,
        id: result.ingredient.id
      };
      if (ingredient) {
        this.shoppingListService.add([ingredient]);
        this.getShoppingList();
      }
    });
  }

  deleteShoppingList() {
    this.shoppingListService.deleteShoppingList();
    this.getShoppingList();
  }

  //This methods sorts all ingredients by their category
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
  }
  getIngredients() {
    this.ingredientService.getIngredients().subscribe((ingredients) => (this.ingredients = ingredients));
  }

  ngOnInit() {
    this.getShoppingList();
    this.getIngredients();
  }
}

@Component({
  selector: 'ingredient-dialog',
  templateUrl: 'ingredient-dialog.html',
})
export class IngredientDialog {
  constructor(public dialogRef: MatDialogRef<IngredientDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
