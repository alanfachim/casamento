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
export class EntregasService {
    private _listEntregas: Entregas | undefined;
    private _entregas: Entregas | undefined;
    private listEntregasObj = new BehaviorSubject < any > (null);
    private EntregasObj = new BehaviorSubject < any > (null);
    private base_url = environment.production;


    constructor(private http: HttpClient) {}

    postEntregas(entregas: Entregas, ): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.post < OutputFiles > (`${this.base_url}/entregas`, entregas, httpOptions)).then((response: any) => {
            this._entregas = response;
            this.entregas.next(this._entregas);
        }).catch(erro => {
            console.log(erro);
        });
    }

    getEntregas(): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/entregas`, httpOptions)).then((response: any) => {
            this._entregas = response;
            this.entregas.next(this._entregas);
        }).catch(erro => {
            console.log(erro);
        });
    }

    listEntregas(): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/entregas`, httpOptions)).then((response: any) => {
            this._listEntregas = response;
            this.listEntregas.next(this._entregas);
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
export class EntregasService {
    private _listEntregas: Entregas | undefined;
    private _entregas: Entregas | undefined;
    private listEntregasObj = new BehaviorSubject < any > (null);
    private EntregasObj = new BehaviorSubject < any > (null);
    private base_url = environment.production;


    constructor(private http: HttpClient) {}

    postEntregas(entregas: Entregas, id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.post < OutputFiles > (`${this.base_url}/entregas/${id}`, entregas, httpOptions)).then((response: any) => {
            this._entregas = response;
            this.entregas.next(this._entregas);
        }).catch(erro => {
            console.log(erro);
        });
    }

    getEntregas(id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/entregas/${id}`, httpOptions)).then((response: any) => {
            this._entregas = response;
            this.entregas.next(this._entregas);
        }).catch(erro => {
            console.log(erro);
        });
    }

    listEntregas(id: any): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        firstValueFrom(this.http.get < OutputFiles > (`${this.base_url}/entregas`, httpOptions)).then((response: any) => {
            this._listEntregas = response;
            this.listEntregas.next(this._entregas);
        }).catch(erro => {
            console.log(erro);
        });
    }

}