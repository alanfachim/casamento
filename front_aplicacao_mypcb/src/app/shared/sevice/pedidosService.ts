import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject,
  firstValueFrom
} from 'rxjs';
import {
  environment
} from 'src/environments/environment';
import { presente } from './presentesService';

export interface Pedido {
  id: any
  nome: any
  email: any
  texto?: string
  meioPagamento?: string,
  status: string,
  presente: presente
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  getPayment(id: string | null): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscription
      })
    };
    return firstValueFrom(this.http.get<any>(`${this.base_url}/pedidos/${id}/payments`, httpOptions)).then((response: any) => {
      return response;
    }).catch(erro => {
      console.log(erro);
    });
  }
  private _item: any;
  setCurrentOrder(item: any) {
    this._item = item;
  }
  getCurrentOrder() {
    return this._item;
  }
  private _pedidos: Pedido | undefined;
  private _listPedidos: Pedido[] | undefined;
  private listPedidosObj = new BehaviorSubject<any>(null);
  public PedidosObj = new BehaviorSubject<any>(null);
  private base_url = environment.base_url;
  private subscription = environment.subscription;


  constructor(private http: HttpClient) { }

  putPedidos(pedido: Pedido, id: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscription
      })
    };
    return firstValueFrom(this.http.post<any>(`${this.base_url}/pedidos/${id}`, pedido, httpOptions)).then((response: any) => {
      this._pedidos = response;
      this.PedidosObj.next(this._pedidos);
    }).catch(erro => {
      console.log(erro);
    });
  }

  postPedidos(pedido: Pedido, id: any): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscription
      })
    };
    firstValueFrom(this.http.post<any>(`${this.base_url}/pedidos`, pedido, httpOptions)).then((response: any) => {
      this._pedidos = response;
      this.PedidosObj.next(this._pedidos);
    }).catch(erro => {
      console.log(erro);
    });
  }

  getPedidos(id: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscription
      })
    };
    return firstValueFrom(this.http.get<any>(`${this.base_url}/pedidos/${id}`, httpOptions)).then((response: any) => {
      this._pedidos = response[0];
      this.PedidosObj.next(this._pedidos);
      return this._pedidos;
    }).catch(erro => {
      console.log(erro);
    });
  }

  listPedidos(id: any): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    firstValueFrom(this.http.get<any>(`${this.base_url}/pedidos`, httpOptions)).then((response: any) => {
      this._listPedidos = response;
      this.listPedidosObj.next(this._listPedidos);
    }).catch(erro => {
      console.log(erro);
    });
  }

}
