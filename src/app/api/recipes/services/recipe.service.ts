import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Array<any> {
    return [
      {
        id: 0,
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        id: 1,
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        id: 2,
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        id: 3,
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        id: 4,
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      },
      {
        id: 5,
        title: 'Bife à parmegiana',
        excerpt: 'Uma receita deliciosa de se fazer',
        category: 1,
        serves: 2,
        authorId: '1',
      }
    ];
  }
}
