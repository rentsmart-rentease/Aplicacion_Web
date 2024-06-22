import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportedFormatErrorComponent } from './unsupported-format-error.component';

describe('UnsupportedFormatErrorComponent', () => {
  let component: UnsupportedFormatErrorComponent;
  let fixture: ComponentFixture<UnsupportedFormatErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnsupportedFormatErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsupportedFormatErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
