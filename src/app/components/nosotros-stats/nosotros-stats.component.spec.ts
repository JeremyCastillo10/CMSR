import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosStatsComponent } from './nosotros-stats.component';

describe('NosotrosStatsComponent', () => {
  let component: NosotrosStatsComponent;
  let fixture: ComponentFixture<NosotrosStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
