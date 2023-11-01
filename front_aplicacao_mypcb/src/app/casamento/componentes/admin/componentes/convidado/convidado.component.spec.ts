import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadoComponent } from './convidado.component';

describe('ConvidadoComponent', () => {
  let component: ConvidadoComponent;
  let fixture: ComponentFixture<ConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvidadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
