import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-tags',
  templateUrl: './recipe-tags.component.html',
  styleUrls: ['./recipe-tags.component.css']
})
export class RecipeTagsComponent implements OnInit {

  recipeTags = ['asian', 'german', 'vegetarian', 'vegan', 'italian', 'french', 'american', 'indian']

  constructor() { }

  ngOnInit(): void {
  }

  filterOnClick() {
    // loop through db and filter.
  }

}
