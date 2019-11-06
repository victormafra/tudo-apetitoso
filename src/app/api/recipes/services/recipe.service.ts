import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Array<any> {
    return [
      {
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      }
    ];
  }
}
