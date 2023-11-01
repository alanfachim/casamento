import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPresentesComponent } from './lista-presentes.component';

describe('ListaPresentesComponent', () => {
  let component: ListaPresentesComponent;
  let fixture: ComponentFixture<ListaPresentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPresentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPresentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
