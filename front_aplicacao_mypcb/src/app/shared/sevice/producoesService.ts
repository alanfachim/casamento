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
export class ProducoesService {
    private _listProducoes: Producoes | undefined;
    private _producoes: Producoes | undefined;
    private listProducoesObj = new BehaviorSubject < any > (null);
    private ProducoesObj = new BehaviorSubject < any > (null);
    private base_url = environment.production;


    constructor(private http: HttpClient) {}

    postProducoes(producoes: Producoes, ): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.post < OutputFiles > (`${this.base_url}/producoes`, producoes, httpOptions)).then((response: any) => {
            this._producoes = response;
            this.producoes.next(this._producoes);
        }).catch(erro => {
            console.log(erro);
        });
    }

    getProducoes(): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/producoes`, httpOptions)).then((response: any) => {
            this._producoes = response;
            this.producoes.next(this._producoes);
        }).catch(erro => {
            console.log(erro);
        });
    }

    listProducoes(): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/producoes`, httpOptions)).then((response: any) => {
            this._listProducoes = response;
            this.listProducoes.next(this._producoes);
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
export class ProducoesService {
    private _listProducoes: Producoes | undefined;
    private _producoes: Producoes | undefined;
    private listProducoesObj = new BehaviorSubject < any > (null);
    private ProducoesObj = new BehaviorSubject < any > (null);
    private base_url = environment.production;


    constructor(private http: HttpClient) {}

    postProducoes(producoes: Producoes, id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.post < OutputFiles > (`${this.base_url}/producoes/${id}`, producoes, httpOptions)).then((response: any) => {
            this._producoes = response;
            this.producoes.next(this._producoes);
        }).catch(erro => {
            console.log(erro);
        });
    }

    getProducoes(id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/producoes/${id}`, httpOptions)).then((response: any) => {
            this._producoes = response;
            this.producoes.next(this._producoes);
        }).catch(erro => {
            console.log(erro);
        });
    }

    listProducoes(id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/producoes`, httpOptions)).then((response: any) => {
            this._listProducoes = response;
            this.listProducoes.next(this._producoes);
        }).catch(erro => {
            console.log(erro);
        });
    }

}