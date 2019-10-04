import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent implements OnInit {
	//@Output() ingredient = new EventEmitter<{name: string, amount: number}>();

	constructor(private slService: ShoppingListService) {}

	ngOnInit() {}

	onAdd(inputName: HTMLInputElement, inputAmt: HTMLInputElement) {
		const newIngredient = new Ingredient(inputName.value, inputAmt.value);
		//this.ingredient.emit(newIngredient);
		this.slService.addIngredient(newIngredient);
	}
}
