import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAutoComponent } from './servicios-auto.component';

describe('ServiciosAutoComponent', () => {
  let component: ServiciosAutoComponent;
  let fixture: ComponentFixture<ServiciosAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosAutoComponent]
    });
    fixture = TestBed.createComponent(ServiciosAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
