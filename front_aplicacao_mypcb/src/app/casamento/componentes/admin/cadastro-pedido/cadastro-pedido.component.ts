import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { presentesService } from 'src/app/shared/sevice/presentesService';

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-pedido-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ConcluidoDialog {
  constructor(public dialogRef: MatDialogRef<ConcluidoDialog>) { }
  save(data: string) {
    this.dialogRef.close({ data: data });
  }
}

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {

  constructor(public dialog: MatDialog, private presentesService: presentesService) { }
  valor = new FormControl('', [Validators.required]);
  nome = new FormControl('', [Validators.required]);
  url = new FormControl('', [Validators.required]);
  ngOnInit(): void {
  }
  habilitaConfirmacao() {
    // Verifica se o email está informado e é válido
    if (this.valor.value && this.valor.valid) {
      // Verifica se o nome está informado e é válido
      if (this.nome.value && this.nome.valid) {
        // Retorna verdadeiro se ambos os campos estão informados e válidos
        if (this.url.value && this.url.valid) {
          // Retorna verdadeiro se ambos os campos estão informados e válidos
          return true;
        }
      }
    }
    // Retorna falso se algum dos campos não está informado ou não é válido
    return false;
  }
  cadastrapresente() {
    this.presentesService.postpresentes({ imagem: this.url.value!,cota: 9, valor: this.valor.value!, nome: this.nome.value!, codigo: `${Date.now()}`, id: `${Date.now()}`}).then(()=>{
      this.dialog.open(ConcluidoDialog, {
        width: '250px'
      }).afterClosed()
        .subscribe(response => {
          console.log(response);
        });
    })
  }
}
