import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'You are welcome to the world of Angular Progamming!';

  filter : "all" | "actuve" | "done" = "all";

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
 
}
