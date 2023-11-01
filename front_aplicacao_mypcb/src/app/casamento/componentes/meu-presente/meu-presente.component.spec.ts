import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPresenteComponent } from './meu-presente.component';

describe('MeuPresenteComponent', () => {
  let component: MeuPresenteComponent;
  let fixture: ComponentFixture<MeuPresenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPresenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
