import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvidadosService } from '../shared/sevice/convidadosService';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
declare function loadFacts(): any;
declare function indexAnimation(): any;

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './confirma-dialog.html',
  styleUrls: ['./casamento.component.css'],
})
export class ConcluidoDialog {
  cadastrado = false;
  msg = '';
  tel = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<ConcluidoDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private convidadosService: ConvidadosService,) {
    this.convidadosService.postconvidados(data)
  }
  getCadastrado() {
    return this.convidadosService.cadastrado;
  }
  habilitaTelefone(): boolean {
    return this.convidadosService.msg.includes('favor informar o telefone');
  }
  save(data: string) {
    this.dialogRef.close({ data: data });
  }
  enviar() {
    this.data['telefone'] = this.tel.value;
    this.convidadosService.postconvidados(this.data)
  }
}


@Component({
  selector: 'app-casamento',
  templateUrl: './casamento.component.html',
  styleUrls: ['./casamento.component.css', "../../../node_modules/keen-slider/keen-slider.min.css",],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CasamentoComponent implements OnInit, AfterViewInit {
  @ViewChild('padrinho') padrinho: any;
  @ViewChild('local') local: any;
  @ViewChild("sliderRef") sliderRef: any

  slider: any = null
  currentSlide: number = 0


  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
  ngAfterViewInit(): void {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
    })
    if (this.route.snapshot.queryParams.lst) {
      localStorage.setItem('lst', 'S');
      this.router.navigate(['/'], {
        queryParams: {
          'yourParamName': null,
          'youCanRemoveMultiple': null,
        },
        queryParamsHandling: 'merge'
      })
    }
    if (this.router.url.includes('confirmacao')) {
      this.confirmacao.nativeElement.scrollIntoView();
      // now account for fixed header
      var scrolledY = window.scrollY;

      if (scrolledY) {
        window.scroll(0, scrolledY - 50);
      }
      setTimeout(() => {
        loadFacts()
        indexAnimation()
      }, 2000);
    } else {
      if (this.router.url.includes('padrinho')) {
        this.padrinho.nativeElement.scrollIntoView();
        // now account for fixed header
        var scrolledY = window.scrollY;

        if (scrolledY) {
          window.scroll(0, scrolledY - 50);
        }
        setTimeout(() => {
          loadFacts()
          indexAnimation()
        }, 2000);
      }
      else {
        if (this.router.url.includes('local')) {
          this.local.nativeElement.scrollIntoView();
          // now account for fixed header
          var scrolledY = window.scrollY;

          if (scrolledY) {
            window.scroll(0, scrolledY - 50);
          }
          setTimeout(() => {
            loadFacts()
            indexAnimation()
          }, 2000);
        }
        else {
          indexAnimation();
          setTimeout(() => {
            loadFacts()
          }, 2000);
        }
      }

    }
  }
  convidado_extra: string[] = [];
  escolha = 'S';
  nome = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(60)]);
  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(9), Validators.maxLength(60)]);
  nome_extra: any[] = [];
  restricoes = new FormControl('');
  erro = false;


  







  incluir() {
    this.nome_extra.push(new FormControl('', [Validators.required]))
    this.convidado_extra.push('Convidado extra ' + (this.convidado_extra.length + 1));
  }
  fnEscolha(e: string) {
    this.escolha = e;
  }

  enviaConfirmacao() {
    let convidado_extras = []
    for (let index = 0; index < this.nome_extra.length; index++) {
      convidado_extras.push(this.nome_extra[index].value);
    }

    let convidado = {
      id: this.email.value!,
      nome: this.nome.value!,
      email: this.email.value!,
      resposta: this.escolha,
      dieta: this.restricoes.value!,
      convidado_extras
    }

    this.dialog.open(ConcluidoDialog, {
      width: '250px',
      data: convidado
    }).afterClosed()
      .subscribe(response => {
        console.log(response);
      });
  }

  habilitaConfirmacao() {
    // Verifica se o email está informado e é válido
    if (this.email.value && this.email.valid) {
      // Verifica se o nome está informado e é válido
      if (this.nome.value && this.nome.valid) {
        // Retorna verdadeiro se ambos os campos estão informados e válidos
        return true;
      }
    }
    // Retorna falso se algum dos campos não está informado ou não é válido
    return false;
  }
  @ViewChild('confirmacao') confirmacao: any;
  constructor(public dialog: MatDialog, private router: Router, private convidadosService: ConvidadosService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    loadFacts()
    indexAnimation()
  }

}
