import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  firstValueFrom
} from 'rxjs';
import {
  environment
} from 'src/environments/environment';


export interface presente {
  id: string,
  nome: string,
  valor: string,
  cota: number,
  cota_selecionada?: number,
  imagem: string,
  codigo: string
}

@Injectable({
  providedIn: 'root'
})
export class presentesService {
  private _listpresentes: presente[] | undefined;
  private _presente: presente | undefined;
  public listpresentesObj$: Observable<presente[]> | undefined;
  private presentesObj$ = new BehaviorSubject<any>(null);
  private base_url = environment.base_url;
  private subscription = environment.subscription;


  constructor(private http: HttpClient) { }

  postpresentes(presentes: presente): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscription
      })
    };
    return firstValueFrom(this.http.post<any>(`${this.base_url}/presentes`, presentes, httpOptions)).then((response: any) => {
      this._presente = response;
      if (this._presente) {
        this.presentesObj$.next(this._presente);
      }

    }).catch(erro => {
      console.log(erro);
    });
  }

  listpresentes(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscription
      })
    };
    this.listpresentesObj$ = this.http.get<any>(`${this.base_url}/presentes`, httpOptions)
  }


}
