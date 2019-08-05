import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipes/recipe';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    { id: 11, name: 'Schnitzel' },
    { id: 12, name: 'Nudeln' },
    { id: 13, name: 'Lasagne' },
    { id: 14, name: 'Kartoffeln' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
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
