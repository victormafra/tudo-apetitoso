import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitasPageComponent } from './receitas-page/receitas-page.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';

const routes: Routes = [
  {
    path: '',
    component: ReceitasPageComponent
  },
  {
    path: 'receita',
    component: ReceitaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
