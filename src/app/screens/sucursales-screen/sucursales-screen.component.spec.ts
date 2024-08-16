import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesScreenComponent } from './sucursales-screen.component';

describe('SucursalesScreenComponent', () => {
  let component: SucursalesScreenComponent;
  let fixture: ComponentFixture<SucursalesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursalesScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
