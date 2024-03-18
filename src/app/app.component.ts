import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from "./item/item.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ItemComponent]
})
export class AppComponent {
  title = 'You are welcome to the world of Angular Progamming!';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [{ description: "Sleep", done: true},
              {description: "Eat", done: false},
              {description: "Drink", done: false},
              {description: "Laugh", done: false}];

  get items()
  {
      if(this.filter === "all"){
        return this.allItems;
      }
      return this.allItems.filter((item) =>{ return this.filter === "done"?  item.done: !item.done });
  }

  addItem(description:string){
     this.allItems.unshift({description, done:false});
  }
 
  remove(item:Item){
    this.allItems.splice(this.allItems.indexOf(item),1);
  }
}
