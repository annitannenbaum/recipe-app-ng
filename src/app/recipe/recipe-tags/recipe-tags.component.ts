import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-tags',
  templateUrl: './recipe-tags.component.html',
  styleUrls: ['./recipe-tags.component.css']
})
export class RecipeTagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filterOnClick() {
    
  }

}
