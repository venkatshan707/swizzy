import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SwizzyService } from '../swizzy.service';
import { Recipe} from '../recipe';

@Component({
  selector: 'app-food-and-resturants',
  templateUrl: './food-and-resturants.component.html',
  styleUrls: ['./food-and-resturants.component.css']
})
export class FoodAndResturantsComponent implements OnInit {
  private enteredRecipe:Recipe;
  private neededName;


  constructor(private route :ActivatedRoute,private swizzyService:SwizzyService) { }

  ngOnInit() {
    this.searched();
  }
   searched():void{
     this.neededName=  this.route.snapshot.paramMap.get('id');
       this.enteredRecipe=this.swizzyService.getRecipe(this.neededName);


   }
}
