import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css'],
})
export class IngredientCreateComponent implements OnInit {
  ingredient = {
    name: '',
    unit: '',
    category: '',
  };
  constructor(private ingredientService: IngredientService) {}


  save(){
    this.ingredientService.save(this.ingredient);
  }
  ngOnInit() {}
}
