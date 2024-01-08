import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesDashboardComponent } from './facilities-dashboard.component';

describe('FacilitiesDashboardComponent', () => {
  let component: FacilitiesDashboardComponent;
  let fixture: ComponentFixture<FacilitiesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilitiesDashboardComponent]
    });
    fixture = TestBed.createComponent(FacilitiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
