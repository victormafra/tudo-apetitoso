import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitasPageComponent } from './receitas-page/receitas-page.component';

const routes: Routes = [
  {
    path: '',
    component: ReceitasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
