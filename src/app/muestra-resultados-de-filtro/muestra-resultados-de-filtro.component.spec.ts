import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraResultadosDeFiltroComponent } from './muestra-resultados-de-filtro.component';

describe('MuestraResultadosDeFiltroComponent', () => {
  let component: MuestraResultadosDeFiltroComponent;
  let fixture: ComponentFixture<MuestraResultadosDeFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuestraResultadosDeFiltroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestraResultadosDeFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
