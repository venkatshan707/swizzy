import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe"
import { SwizzyService } from '../swizzy.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
private currentRecipe:Recipe;
  constructor( private swizzyService:SwizzyService) { }

  ngOnInit() {
  }
  getRecipe(name : any):void{
    this.currentRecipe=this.swizzyService.recipeNameEntered(name);}

}
