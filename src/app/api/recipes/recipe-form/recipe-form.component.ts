import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasHelperService, ICategoriasEnum } from '../services/categorias-helper.service';

@Component({
  selector: 'tda-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup;
  categorias: Array<ICategoriasEnum> = [];

  constructor(
    protected $formBuilder: FormBuilder,
    protected $categoriasHelperService: CategoriasHelperService
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
    this.categorias = this.$categoriasHelperService.getCategoriasList();
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
