import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-project';
  numSelected = 1;

  onNavigation(num: number){
    this.numSelected=num;
  }
}
