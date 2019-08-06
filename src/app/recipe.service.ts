import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipes/recipe';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Schnitzel',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [
        {
          id: 18,
          name: 'Pfirsich',
          category: 'Obst',
          unit: 'stk',
        },
        {
          id: 19,
          name: 'Banane',
          category: 'Obst',
          unit: 'stk',
        },
        {
          id: 20,
          name: 'Apfel',
          category: 'Obst',
          unit: 'stk',
        },
      ],
      preparation: '',
    },
    {
      id: 2,
      name: 'Nudeln',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
    {
      id: 3,
      name: 'Lasagne',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
    {
      id: 4,
      name: 'Kartoffeln',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
    {
      id: 5,
      name: 'Magneta',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
    {
      id: 6,
      name: 'RubberMan',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
    {
      id: 7,
      name: 'Dynama',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
    {
      id: 8,
      name: 'Dr IQ',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
    {
      id: 9,
      name: 'Magma',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
    {
      id: 10,
      name: 'Tornado',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [],
      preparation: '',
    },
  ];

  constructor(private messageService: MessageService) {}

  getRecipes(): Observable<Recipe[]> {
    this.messageService.add('RecipeService: fetched recipes');
    return of(this.recipes);
  }

  getRecipe(id): Observable<Recipe> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`RecipeService: fetched Recipe id=${id}`);
    return of(this.recipes.find((recipe) => recipe.id === id));
  }

  saveRecipe(recipe) {
    if (!recipe.id) {
      recipe.id = (this.recipes.length + 1);
    }

    this.recipes.push(recipe);
  }
}
