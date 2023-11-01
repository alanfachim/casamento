import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}
const MENUITEMS = [
  { state: 'confirmacao', name: 'Confirmar Presença', type: 'link', icon: 'check' },
  { state: 'padrinho', type: 'link', name: 'padrinhos', icon: 'man_4' },
  { state: 'local', type: 'link', name: 'localização', icon: 'location_on' },
  { state: 'lista', type: 'link', name: 'lista de presentes', icon: 'view_list' },
  { state: 'presente', type: 'link', name: 'meu presente', icon: 'redeem' },
  { state: 'admin_pedido', type: 'lst', name: 'cadastrar presentes', icon: 'app_registration' },
  { state: 'admin_convidados', type: 'lst', name: 'lista convidados', icon: 'app_registration' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
