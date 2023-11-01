import { Component, Input, OnInit } from '@angular/core';
import { ConvidadosService, convidado } from 'src/app/shared/sevice/convidadosService';

@Component({
  selector: 'app-convidado',
  templateUrl: './convidado.component.html',
  styleUrls: ['./convidado.component.css']
})
export class ConvidadoComponent implements OnInit {

  constructor() { }
  @Input()
  data: any | undefined;

  @Input()
  pendente: boolean | undefined;



  verificaSeTaNaLista(data: convidado) {
    return data.convidado ? 'está na lista' : 'não localizado'
  }
  verificaSeTaNaListaicon(data: convidado) {
    return data.convidado ? '' : 'campaign'
  }
  ngOnInit(): void {

  }
  getLength(data: any[]) {
    try {
      return data.length + 1
    } catch (error) {
      return 1;
    }

  }
}
