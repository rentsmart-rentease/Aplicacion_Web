import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaVisualizacionComponent } from './busca-visualizacion.component';

describe('BuscaVisualizacionComponent', () => {
  let component: BuscaVisualizacionComponent;
  let fixture: ComponentFixture<BuscaVisualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscaVisualizacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscaVisualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
