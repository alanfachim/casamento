import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pedido, PedidosService } from 'src/app/shared/sevice/pedidosService';
import { presente } from 'src/app/shared/sevice/presentesService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges  {

  constructor(private pedidoService: PedidosService) {

  }
  @Input()
  data: any | undefined;

  @Output() onValueChange: EventEmitter<any> = new EventEmitter();

  @Input()
  hidebtn: boolean | undefined;
  @Input()
  hidecota: boolean | undefined;



  valor: number = 0;
  pedidoSelected(item: presente) {
    const pedido: Pedido = {
      email: '',
      nome: '',
      id: '',
      status: 'pendente',
      presente: item
    }
    this.pedidoService.setCurrentOrder(pedido)
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.valor = Math.trunc((Number(this.data.valor.replace(/\D/g, '')) / 100 / this.data.cota) * this.data.cota_selecionada);
  }

  verificaEscolhido() {
    return this.data.nome.includes('..')
  }
  setCota(up: any) {
    if (!this.data['cota_selecionada'])
      this.data['cota_selecionada'] = this.data.cota
    if (up) {
      if (this.data.cota_selecionada < this.data.cota) {
        this.data.cota_selecionada++;
      }
    }
    else {
      if (this.data.cota_selecionada > 1) {
        this.data.cota_selecionada--;
      }
    }


    this.valor = Math.trunc((Number(this.data.valor.replace(/\D/g, '')) / 100 / this.data.cota) * this.data.cota_selecionada);
    this.onValueChange.emit({ valor: this.valor, cota: this.data.cota, cota_comprada: this.data.cota_selecionada });
  }
  ngOnInit(): void {
    if (!this.data['cota_selecionada'])
      this.valor = Math.trunc(Number(this.data.valor.replace(/\D/g, '')) / 100)
    else this.valor = Math.trunc((Number(this.data.valor.replace(/\D/g, '')) / 100 / this.data.cota) * this.data.cota_selecionada);
    this.onValueChange.emit({ valor: this.valor, cota: this.data.cota, cota_comprada: this.data.cota_selecionada });
  }
  getImage(data: any) {
    return data ? data.imagem : '(sem valor)'
  }

}
