import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Gefüllte Paprika orientalisch',
      imageUrl: 'https://img.chefkoch-cdn.de/rezepte/2820281434050836/bilder/863358/crop-600x400/gefuellte-paprika-orientalisch.jpg',
      ingredients: [
        {
          id: 1,
          name: 'Couscous',
          category: 'Beilage',
          unit: 'g',
          amount: 250
        },
        {
          id: 2,
          name: 'Rinderhackfleisch',
          category: 'Fleisch',
          unit: 'g',
          amount: 500
        },
        {
          id: 3,
          name: 'Paprikaschote(n)',
          category: 'Gemüse',
          unit: 'stk',
          amount: 6
        },
        {
          id: 4,
          name: 'Tomate(n)',
          category: 'Gemüse',
          unit: 'stk',
          amount: 4
        },
        {
          id: 5,
          name: 'Frühlingszwiebel(n)',
          category: 'Gemüse',
          unit: 'stk',
          amount: 2
        },
        {
          id: 6,
          name: 'Salz',
          category: 'Gewürz',
          unit: 'brise(n)',
          amount: 1
        },
        {
          id: 7,
          name: 'Pfeffer',
          category: 'Gemüse',
          unit: 'brise(n)',
          amount: 2
        },
      ],
      preparation: 'Die Paprika mit der Couscousmischung füllen und in eine leicht gefettete Auflaufform stellen. Anschließend die Tomatensoße auf der Füllung verteilen. \nFalls etwas von der Couscous-Füllung übrig bleibt, kann man diese auch einfach in der Auflaufform verteilen.',
    },
    {
      id: 2,
      name: 'Putenschnitzel mit Brokkoli',
      imageUrl: 'https://img.chefkoch-cdn.de/rezepte/356221121015731/bilder/1174939/crop-600x400/putenschnitzel-mit-brokkoli-vom-blech.jpg',
      ingredients: [
        {
          id: 8,
          name: 'Putenschnitzel',
          category: 'Fleisch',
          unit: 'g',
          amount: 600
        },
        {
          id: 9,
          name: 'Zitrone',
          category: 'Obst',
          unit: 'stk',
          amount: 1
        },
        {
          id: 10,
          name: 'Brokkoli',
          category: 'Gemüse',
          unit: 'g',
          amount: 600
        },
        {
          id: 4,
          name: 'Tomate(n)',
          category: 'Gemüse',
          unit: 'stk',
          amount: 2
        },
        {
          id: 11,
          name: 'Kapern',
          category: 'Gewürz',
          unit: 'EL',
          amount: 1
        }
      ],
      preparation: 'Den Backofen auf 180 °C Umluft vorheizen, ein tiefes Backblech mit 3 EL Öl bestreichen. Die Schnitzelchen auf dem Blech verteilen, mit der abgetropften Marinade beträufeln. Den Brokkoli zwischen den Scheiben verteilen. \nDie Tomaten in dicke Scheiben schneiden. Den Mozzarella in dünne Scheiben schneiden. Die Tomatenscheiben mit je einer Mozzarellascheibe belegen, mit wenig Salz und Pfeffer würzen und auf den Schnitzelchen verteilen. Im Backofen ca. 15 Minuten garen.      ',
    },
  ];

  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  getRecipe(id): Observable<Recipe> {
    return of(this.recipes.find((recipe) => recipe.id === id));
  }

  saveRecipe(recipe) {
    if (!recipe.id) {
      recipe.id = (this.recipes.length + 1);
    }

    this.recipes.push(recipe);
  }
}
