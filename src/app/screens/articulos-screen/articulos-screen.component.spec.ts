import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosScreenComponent } from './articulos-screen.component';

describe('ArticulosScreenComponent', () => {
  let component: ArticulosScreenComponent;
  let fixture: ComponentFixture<ArticulosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticulosScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
