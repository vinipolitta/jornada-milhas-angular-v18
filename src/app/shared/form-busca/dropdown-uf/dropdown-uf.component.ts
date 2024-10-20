import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from './../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../../core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss',
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefix: string = '';

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions = [];

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
      console.log(this.unidadesFederativas);

    });
  }
}
