import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService, Pedido } from 'src/app/shared/sevice/pedidosService';
import { presente } from 'src/app/shared/sevice/presentesService';
declare var mp: any;
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogElementsExampleDialog { }

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-pedido-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
  save(data: string) {
    this.dialogRef.close({ data: data });
  }
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  valor: any;
  cota: number = 0;
  cota_comprada: number = 0;
  pedido: Pedido | undefined;
  loading: boolean = false;
  val: number=0;

  constructor(private pedidoService: PedidosService, private router: Router, public dialog: MatDialog, private route: ActivatedRoute) { }
  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]);
  nome = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(60)]);
  menssagem = new FormControl('', [Validators.required]);
  pagamento = new FormControl('pix', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.pedido = this.pedidoService.getCurrentOrder();
    let id = this.route.snapshot.queryParams.id;
    if (!this.pedido && !id) {
      this.router.navigate(['/']);
    } else {
      if (id) {
        this.email.setValue(id);
        this.verificaSetemPedidoPendente(false)
      }
    }
    this.setValor();
  }
  load(pedido: any) {
    this.pedido = pedido;
    if (this.pedido && !this.pedido?.presente.cota_selecionada)
      this.pedido!.presente['cota_selecionada'] = this.pedido?.presente.cota;
    this.menssagem.setValue(pedido.texto);
    this.nome.setValue(pedido.nome);
    if (pedido.meioPagamento)
      this.pagamento.setValue(pedido.meioPagamento);
    this.updatePagamento();
  }

  setValor() {
    if (this.pedido && this.pedido?.presente.cota_selecionada)
      this.val= Math.trunc((Number(this.pedido.presente.valor.replace(/\D/g, '')) / 100 / this.pedido.presente.cota) * this.pedido?.presente.cota_selecionada!);
    else if (this.pedido)
    this.val= Math.trunc((Number(this.pedido.presente.valor.replace(/\D/g, '')) / 100 / this.pedido.presente.cota) * this.pedido?.presente.cota);
  }

  verificaSetemPedidoPendente(pergunta: boolean) {
    this.pedidoService.getPedidos(this.email.value).then((pedido: any) => {
      if (pedido && pedido.status == "pendente") {
        //abre dialogo
        if (pergunta) {
          this.dialog.open(DialogAnimationsExampleDialog, {
            width: '250px'
          }).afterClosed()
            .subscribe(response => {
              if (response.data == 'sim') {
                this.load(pedido);
              }
              console.log(response);
            });
        } else {
          this.load(pedido);
        }
      } else {
        this.pedido!.meioPagamento = this.pagamento.value ? this.pagamento.value : '';
        this.pedido!.email = this.email.value ? this.email.value : '';
        this.pedido!.nome = this.nome.value ? this.nome.value : '';
        this.pedido!.id = this.email.value ? this.email.value : '';
        this.pedidoService.postPedidos(this.pedido!, this.email.value)
      }
    });
  }

  updatePagamento() {
    if (this.loading)
      return;
    this.loading = true;
    this.pedido!.meioPagamento = this.pagamento.value ? this.pagamento.value : '';
    this.pedido!.email = this.email.value ? this.email.value : '';
    this.pedido!.nome = this.nome.value ? this.nome.value : '';
    this.pedidoService.putPedidos(this.pedido!, this.email.value).then(() => {
      return this.pedidoService.getPayment(this.email.value).then((data: any) => {

        mp.bricks().create("wallet", "wallet_container", {
          initialization: {
            preferenceId: data["id"],
          },
        });
        this.loading = false;
      })
    })

  }
  onTextChange(value: string) {
    this.pedido!.texto = value;
    this.pedidoService.putPedidos(this.pedido!, this.email.value)
  }

  finalizaPedido() {
    this.pedido!.status = "finalizado";
    this.pedidoService.putPedidos(this.pedido!, this.email.value)
    this.dialog.open(DialogElementsExampleDialog).afterClosed().subscribe(() => {
      this.router.navigate(['/']);
    })

  }


  currentOrder() {
    let item = this.pedidoService.getCurrentOrder();
    return item;
  }
  isRemetenteInformado(): boolean {
    // Verifica se o email está informado e é válido
    if (this.email.value && this.email.valid) {
      // Verifica se o nome está informado e é válido
      if (this.nome.value && this.nome.valid) {
        // Retorna verdadeiro se ambos os campos estão informados e válidos
        return true;
      }
    }
    // Retorna falso se algum dos campos não está informado ou não é válido
    return false;
  }

}
