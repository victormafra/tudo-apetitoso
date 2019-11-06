import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasHelperService, ICategoriasEnum } from '../services/categorias-helper.service';

@Component({
  selector: 'tda-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  @Input() id: number;

  recipeForm: FormGroup;
  categorias: Array<ICategoriasEnum> = [];
  listaIngredientes: Array<string> = ['Ovo', 'Óleo'];

  constructor(
    protected $formBuilder: FormBuilder,
    protected $categoriasHelperService: CategoriasHelperService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.loadCategorias();
    this.loadForm();
  }

  initializeForm(): void {
    this.recipeForm = this.$formBuilder.group({
      titulo: ['', Validators.required],
      categoria: [],
      tempoPreparo: [],
      rendimento: [],
      criador: [],
      ingredientes: [],
      quantidadeIngredientes: [],
      preparo: [],
    });
  }

  loadCategorias(): void {
    this.categorias = this.$categoriasHelperService.getCategoriasList();
  }

  loadForm(): void {
    if (typeof this.id !== 'undefined') {
      // Buscar formulário da API
    }
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
