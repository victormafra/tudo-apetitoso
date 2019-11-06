import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasPageComponent } from './receitas-page/receitas-page.component';
import { RecipesModule } from '../../api/recipes/recipes.module';


@NgModule({
  declarations: [ReceitasPageComponent],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    RecipesModule
  ]
})
export class ReceitasModule { }
