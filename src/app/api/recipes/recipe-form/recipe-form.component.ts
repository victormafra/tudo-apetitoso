import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasEnum } from '../enums/categorias.enum';

@Component({
  selector: 'tda-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup;
  categorias: Array<{value: string, name: string}> = [];

  constructor(
    protected $formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.loadCategorias();
  }

  initializeForm(): void {
    this.recipeForm = this.$formBuilder.group({
      titulo: ['', Validators.required],
      categoria: [],
      tempoPreparo: [],
      rendimento: [],
      criador: [],
      igredientes: [],
      preparo: [],
    });
  }

  loadCategorias(): void {
    const enumValues = Object.keys(CategoriasEnum);
    this.categorias = enumValues.slice(0, enumValues.length).map(name => {
      return {value: CategoriasEnum[name], name};
    });
  }

  enviarFormulario(): void {
    const isFormValid = this.recipeForm.valid;
    if (isFormValid) {
      const formValues = this.recipeForm.getRawValue();
      console.log(formValues);
    } else {
      console.log('Formulário Inválido');
    }
  }

}
