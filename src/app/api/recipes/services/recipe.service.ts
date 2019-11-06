import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Array<any> {
    // excerpt
    return [
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      },
      {
        excerpt: 'Uma receita deliciosa de se fazer'
      }
    ];
  }
}
