import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublInmuebleComponent } from './publ-inmueble.component';

describe('PublInmuebleComponent', () => {
  let component: PublInmuebleComponent;
  let fixture: ComponentFixture<PublInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublInmuebleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
