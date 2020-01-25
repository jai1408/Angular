import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //binding index property so that it can be used from outside of this component. e.g. RecipeListComponent
  @Input() index: number;

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  /**
   * ! no longer using onSelect as using child routing to select a recipe
   onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
   */

}
