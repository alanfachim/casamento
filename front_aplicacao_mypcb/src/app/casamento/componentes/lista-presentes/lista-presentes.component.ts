import { Component, OnInit } from '@angular/core';
import { presente, presentesService } from 'src/app/shared/sevice/presentesService';

@Component({
  selector: 'app-lista-presentes',
  templateUrl: './lista-presentes.component.html',
  styleUrls: ['./lista-presentes.component.css']
})
export class ListaPresentesComponent implements OnInit {

  constructor(public presentesService: presentesService) { }



  ngOnInit(): void {
    this.presentesService.listpresentes();
  }
  getItem(i: any) {
    return i;
  }
  filter(data: any[]) {
   return data.filter((value: presente) => {
      return Number(value.codigo.replace(/\D/g, ''))-value.nome.length<7;
    })
  }

}
