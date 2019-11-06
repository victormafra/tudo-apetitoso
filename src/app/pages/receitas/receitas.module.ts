import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasPageComponent } from './receitas-page/receitas-page.component';
import { RecipesModule } from '../../api/recipes/recipes.module';
import { ReceitaFormComponent } from './receita-form/receita-form.component';


@NgModule({
  declarations: [ReceitasPageComponent, ReceitaFormComponent],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    RecipesModule
  ]
})
export class ReceitasModule { }
