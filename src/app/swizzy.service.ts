import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import {RECIPE} from './recipe-sample-data'


@Injectable()
export class SwizzyService {


  constructor() { }
  getRecipe(neededName: any): Recipe {
    for(var i=0;i<RECIPE.length;i++){
      if(RECIPE[i].name==neededName)
      return RECIPE[i];}
  }
  recipeNameEntered(name: any): Recipe{
    for(var i=0;i<RECIPE.length;i++){
      if(RECIPE[i].name==name)
      return RECIPE[i];}

}}
