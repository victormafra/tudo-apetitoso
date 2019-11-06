import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'tda-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Array<{excerpt: string}> = [];

  constructor(
    protected $recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes = this.$recipeService.getRecipes();
  }

}
