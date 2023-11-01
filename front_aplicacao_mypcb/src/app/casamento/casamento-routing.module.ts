
import { Routes } from '@angular/router';
import { CasamentoComponent } from './casamento.component';
import { ListaPresentesComponent } from './componentes/lista-presentes/lista-presentes.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { MeuPresenteComponent } from './componentes/meu-presente/meu-presente.component';
import { CadastroPedidoComponent } from './componentes/admin/cadastro-pedido/cadastro-pedido.component';
import { ListaConvidadosComponent } from './componentes/admin/lista-convidados/lista-convidados.component';

export const CRoutes: Routes = [{
  path: '',
  component: CasamentoComponent
},
{
  path: 'confirmacao',
  component: CasamentoComponent
}, {
  path: 'padrinho',
  component: CasamentoComponent
}, {
  path: 'local',
  component: CasamentoComponent
}, {
  path: 'lista',
  component: ListaPresentesComponent
}, {
  path: 'pedido',
  component: PedidoComponent
}, {
  path: 'presente',
  component: MeuPresenteComponent
},{
  path: 'admin_pedido',
  component: CadastroPedidoComponent
},{
  path: 'admin_convidados',
  component: ListaConvidadosComponent
}];

