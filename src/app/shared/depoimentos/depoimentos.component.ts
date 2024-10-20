import { Component } from '@angular/core';
import { Depoimento } from '../../core/types/type';
import { DepoimentosService } from '../../core/services/depoimentos.service';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent {
  depoimentos: Depoimento[] = [];
  constructor(private service: DepoimentosService) {
  }
  ngOnInit(): void {
    this.service.listarDepoimentos().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }
}
