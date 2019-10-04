import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: [ './recipe-list.component.css' ]
})
export class RecipeListComponent implements OnInit {
	//@Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[];

	/*
  ? Deprecated defined in RecipeService
  recipes: Recipe[] = [
		new Recipe('TestRecipe1', 'This is a simple test recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
		new Recipe('TestRecipe2','This is a simple test recipe','https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg'),
		new Recipe('TestRecipe3','This is a simple test recipe','https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg'),
    new Recipe('TestRecipe4','This is a simple test recipe','http://media14.s-nbcnews.com/j/MSNBC/Components/Video/201902/tdy_food_hoda_rigatoni2_190211.today-inline-vid-featured-desktop.jpg')];
    */

	constructor(private recipeService: RecipeService) {}

	ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
	}

	/*
	onRecepiSelected(recipeEl: Recipe) {
		this.recipeWasSelected.emit(recipeEl);
  }*/
}
