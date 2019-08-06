export class Recipe {
  id: number;
  name: string;
  imageUrl: string;
  ingredients: Object[];
  preparation: string;

  constructor(id, name, imageUrl, ingredients, preparation) {}
}
