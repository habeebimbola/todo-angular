import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: "app-item",
    standalone: true,
    imports:[CommonModule],
    templateUrl: './itemcomponent.component.html',
    styleUrls:["./itemComponent.component.css"],
})

export class ItemComponent{
     items = ["One","Two", "Three"];
     title = "This is the Item Page"
    message = "Items are to be selected below";

    get itemsList(){
        return this.items;
    }
}