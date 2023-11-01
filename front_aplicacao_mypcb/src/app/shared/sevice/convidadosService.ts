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
  firstValueFrom,
  mergeMap,
  of
} from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import {
  environment
} from 'src/environments/environment';


export interface convidado {
  id: string,
  status: string,
  nome: string,
  email: string,
  dieta: string,
  resposta: string,
  convidado: boolean,
  convidado_extras: string[],
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {
  private _listconvidados: convidado[] | undefined;
  private _convidado: convidado | undefined;
  public listconvidadosObj$: Observable<any> = of(null);
  private convidadosObj$ = new BehaviorSubject<any>(null);
  private base_url = environment.base_url;
  private subscription = environment.subscription;
  public listaPendente: convidado[] = [];
  lista: convidado[] = [];
  cadastrado = false;
  msg = '';

  constructor(private http: HttpClient) { }

  verificaSemelhanca(nome_lista: convidado, inscrito: convidado): boolean {
    let match = 0
    //verifica se o nome principal bate
    for (let part of nome_lista.nome.split(' ')) {
      if (this.removerAcentosECaracteresEspeciais(inscrito.nome).includes(this.removerAcentosECaracteresEspeciais(part)) && part!="") {
        match++;
      }
      if (match > 1)
        return true;
    }
    for (let extra of inscrito.convidado_extras) {
      match = 0
      //verifica se o nome principal bate
      for (let part of nome_lista.nome.split(' ')) {
        if (this.removerAcentosECaracteresEspeciais(extra).includes(this.removerAcentosECaracteresEspeciais(part)) && part!="") {
          match++;
        }
        if (match > 1)
          return true;
      }
    }
    return false;
  }

  postconvidados(convidados: convidado): any {
    convidados.status = 'confirmado'
    this.cadastrado = false;
    //antes de confirmar verifica se é um pendente
    if (this.listaPendente.length == 0 && this.lista.length == 0) {
      this.listconvidados();
      firstValueFrom(this.listconvidadosObj$).then(() => {
        return this.postconvidados(convidados);
      })
    } else {
      //verifica primeiro ja foi confirmado
      for (let item of this.lista) {
        if (this.verificaSemelhanca(item, convidados)) {
          this.cadastrado = true;
          this.msg = 'já foi confirmado';
          this.listaPendente = []
          this.lista = []
          return 'já foi confirmado'
        }
      }
      // se não estiver confirmado verifica se na lista de pendentes
      for (let item of this.listaPendente) {
        if (this.verificaSemelhanca(item, convidados)) {
          convidados.convidado = true;
        }
      }
      if (!convidados.convidado && !convidados.telefone) {
        this.cadastrado = true;
        this.msg = 'favor informar o telefone';
        return 'favor informar o telefone';
      }
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': this.subscription
        })
      };
      return firstValueFrom(this.http.post<any>(`${this.base_url}/convidados`, convidados, httpOptions)).then((response: any) => {
        this.listaPendente = []
        this.lista = []
        this._convidado = response;
        if (this._convidado) {
          this.convidadosObj$.next(this._convidado);
        }
        this.cadastrado = true;
        this.msg = ' O convidado foi cadastrado com sucesso!';
      }).catch(erro => {
        console.log(erro);
      });
    }


  }

  listconvidados(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscription
      })
    };
    this.listconvidadosObj$ = this.http.get<any>(`${this.base_url}/convidados`, httpOptions).pipe(
      mergeMap((data: convidado[]) => {
        let listaPrincipal = this.validaConvidados(data);
        return of(listaPrincipal)
      })
    )
  }

  validaConvidados(data: any) {
    this.listaPendente = []
    let listap = []

    let item: convidado
    for (item of data) {
      if (item.status != 'pendente') {
        this.lista.push(item)
      } else {
        listap.push(item)

      }
    }
    //verifica lista os que foram convidados
    //pra cada cliente confirmado
    for (let c of listap) {
      let encontrado = false;
      //verifica primeiro ja foi confirmado
      for (let index = 0; index < this.lista.length && !encontrado; index++) {
        encontrado = this.verificaSemelhanca(c, this.lista[index]);
      }
      if (!encontrado)
        this.listaPendente.push(c)
    }
    return this.lista;
  }

  removerAcentosECaracteresEspeciais(texto:string) {
    // Normaliza o texto para a forma NFD, que separa os caracteres compostos
    texto = texto.normalize("NFD");
    // Cria uma expressão regular que corresponde aos caracteres acentuados ou especiais
    var regex = /[\u0300-\u036f]|[^0-9a-zA-Z\s]/g;
    // Substitui os caracteres encontrados por uma string vazia
    texto = texto.replace(regex, "");
    // Retorna o texto sem acentos ou caracteres especiais
    return texto;
  }

}
