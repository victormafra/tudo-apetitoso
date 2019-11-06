import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tda-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.scss']
})
export class ReceitaFormComponent implements OnInit {
  id: number;
  title = 'Nova Receita';

  constructor(
    protected $activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRouteId();
  }

  getRouteId(): void {
    const params = this.$activatedRoute.snapshot.params;
    if (params.id) {
      this.id = params.id;
      this.title = 'Editar Receita ' + this.id.toString();
    }
  }

}
