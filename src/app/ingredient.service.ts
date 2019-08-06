import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'Schnitzel',
      category: 'penis',
      unit: 'stk',
    },
    {
      id: 2,
      name: 'Nudeln',
      category: 'penis',
      unit: 'stk',
    },
    {
      id: 3,
      name: 'Lasagne',
      category: 'penis',
      unit: 'stk',
    },
    {
      id: 4,
      name: 'Kartoffeln',
      category: 'penis',
      unit: 'stk',
    },
    {
      id: 5,
      name: 'Magneta',
      category: 'penis',
      unit: 'stk',
    },
    {
      id: 6,
      name: 'RubberMan',
      category: 'penis',
      unit: 'stk',
    },
    {
      id: 7,
      name: 'Dynama',
      category: 'penis',
      unit: 'stk',
    },
    {
      id: 8,
      name: 'Pfirsich',
      category: 'Obst',
      unit: 'stk',
    },
    {
      id: 9,
      name: 'Banane',
      category: 'Obst',
      unit: 'stk',
    },
    {
      id: 10,
      name: 'Apfel',
      category: 'Obst',
      unit: 'stk',
    },
  ];

  constructor() {}

  getIngredients(): Observable<Ingredient[]> {
    return of(this.ingredients);
  }

  getIngredient(id): Observable<Ingredient> {
    return of(this.ingredients.find((ingredient) => ingredient.id === id));
  }

  save(ingredient) {
    if (!ingredient.id) {
      ingredient.id = this.ingredients.length + 1;
    }

    this.ingredients.push(ingredient);
  }
}
