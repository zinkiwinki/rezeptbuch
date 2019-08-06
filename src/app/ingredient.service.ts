import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient'

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  ingredients: Ingredient[] = [
    {
      id: 11,
      name: 'Schnitzel',
      category: 'penis',
      unit: 'stk'
    },
    {
      id: 12,
      name: 'Nudeln',
      category: 'penis',
      unit: 'stk'
    },
    {
      id: 13,
      name: 'Lasagne',
      category: 'penis',
      unit: 'stk'
    },
    {
      id: 14,
      name: 'Kartoffeln',
      category: 'penis',
      unit: 'stk'
    },
    {
      id: 15,
      name: 'Magneta',
      category: 'penis',
      unit: 'stk'
    },
    {
      id: 16,
      name: 'RubberMan',
      category: 'penis',
      unit: 'stk'
    },
    {
      id: 17,
      name: 'Dynama',
      category: 'penis',
      unit: 'stk'
    },
    {
      id: 18,
      name: 'Pfirsich',
      category: 'Obst',
      unit: 'stk'
    },
    {
      id: 19,
      name: 'Banane',
      category: 'Obst',
      unit: 'stk'
    },
    {
      id: 20,
      name: 'Apfel',
      category: 'Obst',
      unit: 'stk'
    },
  ];

  constructor() {}

  getIngredients(): Observable<Ingredient[]> {
    return of(this.ingredients);
  }

  getIngredient(id): Observable<Ingredient> {
    return of(this.ingredients.find((ingredient) => ingredient.id === id));
  }
}
