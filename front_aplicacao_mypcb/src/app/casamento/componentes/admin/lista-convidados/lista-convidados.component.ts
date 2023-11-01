import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ConvidadosService } from 'src/app/shared/sevice/convidadosService';

@Component({
  selector: 'app-lista-convidados',
  templateUrl: './lista-convidados.component.html',
  styleUrls: ['./lista-convidados.component.css']
})
export class ListaConvidadosComponent implements OnInit {

  constructor(public convidadosService: ConvidadosService) { }

  ngOnInit(): void {
    this.convidadosService.listconvidados()
    firstValueFrom(this.convidadosService.listconvidadosObj$ ).then(() => {
    });
  }


}
