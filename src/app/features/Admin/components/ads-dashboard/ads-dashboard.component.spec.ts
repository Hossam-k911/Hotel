import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDashboardComponent } from './ads-dashboard.component';

describe('AdsDashboardComponent', () => {
  let component: AdsDashboardComponent;
  let fixture: ComponentFixture<AdsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsDashboardComponent]
    });
    fixture = TestBed.createComponent(AdsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
