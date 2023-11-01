import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConvidadosComponent } from './lista-convidados.component';

describe('ListaConvidadosComponent', () => {
  let component: ListaConvidadosComponent;
  let fixture: ComponentFixture<ListaConvidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConvidadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaConvidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
