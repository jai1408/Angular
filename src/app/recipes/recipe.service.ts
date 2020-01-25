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
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),

        new Recipe('Taco Crescent Ring',
            ' Its easy, beefy, cheesy and comes loaded with all the best taco toppings',
            'https://images-gmi-pmc.edge-generalmills.com/23bcd559-1e27-4c54-90a7-812690764c7f.jpg',
            [
                new Ingredient('ground beef', 1),
                new Ingredient('Old El Paso™ taco seasoning mix', 1)
            ]),

        new Recipe('Creamy Italian Chicken Pasta Recipe',
            ' Packed with flavor from spinach, garlic, and sun dried tomatoes, your family will gobble this easy dinner right up!',
            'https://www.shugarysweets.com/wp-content/uploads/2011/04/IMG_3873.jpg',
            [
                new Ingredient('Pasta', 100),
                new Ingredient('chicken', 200)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientToShoppingList(ingredients);
    }
}
