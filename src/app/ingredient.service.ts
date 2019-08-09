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
      name: 'Couscous',
      category: 'Beilage',
      unit: 'g'
    },
    {
      id: 2,
      name: 'Rinderhackfleisch',
      category: 'Fleisch',
      unit: 'g'
    },
    {
      id: 3,
      name: 'Paprikaschote(n)',
      category: 'Gemüse',
      unit: 'stk'
    },
    {
      id: 4,
      name: 'Tomate(n)',
      category: 'Gemüse',
      unit: 'stk'
    },
    {
      id: 5,
      name: 'Frühlingszwiebel(n)',
      category: 'Gemüse',
      unit: 'stk'
    },
    {
      id: 6,
      name: 'Salz',
      category: 'Gewürz',
      unit: 'brise(n)'
    },
    {
      id: 7,
      name: 'Pfeffer',
      category: 'Gewürz',
      unit: 'brise(n)'
    },
    {
      id: 8,
      name: 'Putenschnitzel',
      category: 'Fleisch',
      unit: 'g'
    },
    {
      id: 9,
      name: 'Zitrone',
      category: 'Obst',
      unit: 'stk'
    },
    {
      id: 10,
      name: 'Brokkoli',
      category: 'Gemüse',
      unit: 'g'
    },
    {
      id: 11,
      name: 'Kapern',
      category: 'Gewürz',
      unit: 'EL'
    }
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
