import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from './../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../../core/types/type';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss',
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() control!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;


  constructor(
    private unidadeFederativaService: UnidadeFederativaService) {

  }

  ngOnInit(): void {
    this.unidadeFederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados
        console.log(this.unidadesFederativas)
      })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    )
  }

  filtrarUfs(value: string): UnidadeFederativa[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }
}
