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
      id: 11,
      name: 'Schnitzel',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      ingredients: [
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
      ],
      preparation: '',
    },
    {
      id: 12,
      name: 'Nudeln',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
      ingredients: [],
      preparation: '',
    },
    {
      id: 13,
      name: 'Lasagne',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
      ingredients: [],
      preparation: '',
    },
    {
      id: 14,
      name: 'Kartoffeln',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
      ingredients: [],
      preparation: '',
    },
    {
      id: 15,
      name: 'Magneta',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
      ingredients: [],
      preparation: '',
    },
    {
      id: 16,
      name: 'RubberMan',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
      ingredients: [],
      preparation: '',
    },
    {
      id: 17,
      name: 'Dynama',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
      ingredients: [],
      preparation: '',
    },
    {
      id: 18,
      name: 'Dr IQ',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
      ingredients: [],
      preparation: '',
    },
    {
      id: 19,
      name: 'Magma',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
      ingredients: [],
      preparation: '',
    },
    {
      id: 20,
      name: 'Tornado',
      imageUrl: 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)',
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
}
