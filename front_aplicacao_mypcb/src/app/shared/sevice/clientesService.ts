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

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    private _listClientes: Clientes | undefined;
    private _clientes: Clientes | undefined;
    private listClientesObj = new BehaviorSubject < any > (null);
    private ClientesObj = new BehaviorSubject < any > (null);
    private base_url = environment.production;


    constructor(private http: HttpClient) {}

    postClientes(clientes: Clientes, ): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.post < OutputFiles > (`${this.base_url}/clientes`, clientes, httpOptions)).then((response: any) => {
            this._clientes = response;
            this.clientes.next(this._clientes);
        }).catch(erro => {
            console.log(erro);
        });
    }

    getClientes(): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/clientes`, httpOptions)).then((response: any) => {
            this._clientes = response;
            this.clientes.next(this._clientes);
        }).catch(erro => {
            console.log(erro);
        });
    }

    listClientes(): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/clientes`, httpOptions)).then((response: any) => {
            this._listClientes = response;
            this.listClientes.next(this._clientes);
        }).catch(erro => {
            console.log(erro);
        });
    }

}import {
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

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    private _listClientes: Clientes | undefined;
    private _clientes: Clientes | undefined;
    private listClientesObj = new BehaviorSubject < any > (null);
    private ClientesObj = new BehaviorSubject < any > (null);
    private base_url = environment.production;


    constructor(private http: HttpClient) {}

    postClientes(clientes: Clientes, id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.post < OutputFiles > (`${this.base_url}/clientes/${id}`, clientes, httpOptions)).then((response: any) => {
            this._clientes = response;
            this.clientes.next(this._clientes);
        }).catch(erro => {
            console.log(erro);
        });
    }

    getClientes(id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/clientes/${id}`, httpOptions)).then((response: any) => {
            this._clientes = response;
            this.clientes.next(this._clientes);
        }).catch(erro => {
            console.log(erro);
        });
    }

    listClientes(id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/clientes`, httpOptions)).then((response: any) => {
            this._listClientes = response;
            this.listClientes.next(this._clientes);
        }).catch(erro => {
            console.log(erro);
        });
    }

}