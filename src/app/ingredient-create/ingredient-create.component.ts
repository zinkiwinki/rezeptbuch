import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Router } from '@angular/router';

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
  constructor(private ingredientService: IngredientService, public router: Router) {}

  save() {
    if (this.ingredient.name != '') {
      this.ingredientService.save(this.ingredient);
    }
    
 this.router.navigate(['/shopping-list']);
  }
  ngOnInit() {}
}