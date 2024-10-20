import { Component, Input, OnInit } from '@angular/core';
import { Depoimento } from '../../core/types/type';
import { DepoimentosService } from '../../core/services/depoimentos.service';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss',
})
export class CardDepoimentoComponent {
  @Input() depoimento!: Depoimento;
}
