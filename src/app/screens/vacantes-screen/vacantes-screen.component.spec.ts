import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantesScreenComponent } from './vacantes-screen.component';

describe('VacantesScreenComponent', () => {
  let component: VacantesScreenComponent;
  let fixture: ComponentFixture<VacantesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacantesScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacantesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
