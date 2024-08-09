import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagNavComponent } from './flag-nav.component';

describe('FlagNavComponent', () => {
  let component: FlagNavComponent;
  let fixture: ComponentFixture<FlagNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
