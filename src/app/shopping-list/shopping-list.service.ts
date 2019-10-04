import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [ new Ingredient('Apples', '10 pcs'), new Ingredient('Tomatoes', '20 pcs') ];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredientsToSL(ingredients: Ingredient[]) {
		// for (let ingredient of ingredients) {
		// 	this.addIngredient(ingredient);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}
