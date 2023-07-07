import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosAutoComponent } from './modelos-auto.component';

describe('ModelosAutoComponent', () => {
  let component: ModelosAutoComponent;
  let fixture: ComponentFixture<ModelosAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelosAutoComponent]
    });
    fixture = TestBed.createComponent(ModelosAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
