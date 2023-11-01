import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CRoutes } from './casamento-routing.module';
import { ItemComponent } from './componentes/lista-presentes/componentes/item/item.component';
import { ListaPresentesComponent } from './componentes/lista-presentes/lista-presentes.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { TruncatePipe } from './componentes/lista-presentes/pipes/truncate';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MeuPresenteComponent } from './componentes/meu-presente/meu-presente.component';
import { CasamentoComponent, ConcluidoDialog } from './casamento.component';
import { CadastroPedidoComponent } from './componentes/admin/cadastro-pedido/cadastro-pedido.component';
import { ListaConvidadosComponent } from './componentes/admin/lista-convidados/lista-convidados.component';
import { ConvidadoComponent } from './componentes/admin/componentes/convidado/convidado.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CountdownComponent } from './componentes/countdown/countdown.component';



@NgModule({
  declarations: [
    ItemComponent,
    TruncatePipe,
    ListaPresentesComponent,
    PedidoComponent,
    MeuPresenteComponent,
    CasamentoComponent,
    CadastroPedidoComponent,
    ListaConvidadosComponent,
    ConvidadoComponent,
    ConcluidoDialog,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(CRoutes)
  ],
  exports: [MatListModule,
    TruncatePipe,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class CasamentoModule { }
