import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [RecipesListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [RecipesListComponent]
})
export class RecipesModule { }
