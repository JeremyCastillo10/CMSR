import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDetalleScreenComponent } from './articulo-detalle-screen.component';

describe('ArticuloDetalleScreenComponent', () => {
  let component: ArticuloDetalleScreenComponent;
  let fixture: ComponentFixture<ArticuloDetalleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloDetalleScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloDetalleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
