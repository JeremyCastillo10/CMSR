import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMedicosComponent } from './seccion-medicos.component';

describe('SeccionMedicosComponent', () => {
  let component: SeccionMedicosComponent;
  let fixture: ComponentFixture<SeccionMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionMedicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
