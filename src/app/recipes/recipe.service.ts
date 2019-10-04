import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel',
			'A super-tasty Schnitzel - just awesome!',
			'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
			[ new Ingredient('Meat', '250 gms'), new Ingredient('French Fries', '20 pcs') ]
		),
		new Recipe(
			'Big Fat Burger',
			'What else you need to say?',
			'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
			[ new Ingredient('Buns', '3 pcs'), new Ingredient('Meat', '250 gms') ]
		),
		new Recipe(
			'Chicken Parmesan Pasta',
			'An Italian style chicken pasta',
			'https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-feat.jpg',
			[ new Ingredient('Pasta', '200 gms'), new Ingredient('Chicken', '250 gms') ]
		),
		new Recipe(
			'Chhole Paneer',
			'Authentic punjabi style chhole paneer',
			'https://www.vegrecipesofindia.com/wp-content/uploads/2015/02/chole-paneer-recipe24.jpg',
			[ new Ingredient('Paneer', '100 gms'), new Ingredient('Chhole', '200 gms') ]
		)
	];

	getRecipes() {
		return this.recipes.slice();
	}
	constructor(private slService: ShoppingListService) {}

	addIngredientsToSL(ingredient: Ingredient[]) {
		this.slService.addIngredientsToSL(ingredient);
	}
}
