import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() ingredient = new EventEmitter<{name: string, amount: number}>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(inputName: HTMLInputElement, inputAmt: HTMLInputElement){
    const newIngredient = new Ingredient(inputName.value, inputAmt.valueAsNumber);
    this.ingredient.emit(newIngredient);
  }

}
