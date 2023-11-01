import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/shared/sevice/pedidosService';

@Component({
  selector: 'app-meu-presente',
  templateUrl: './meu-presente.component.html',
  styleUrls: ['./meu-presente.component.css']
})
export class MeuPresenteComponent implements OnInit {
  pedido: any;
  produto: any;
  constructor(private pedidoService: PedidosService, private router: Router, public dialog: MatDialog) { }
  email = new FormControl('');
  ngOnInit(): void {
  }
  buscar() {
    this.pedidoService.getPedidos(this.email.value).then((pedido: any) => {

      if (pedido) {
        this.pedido = pedido;
      }
    });
  }

}
