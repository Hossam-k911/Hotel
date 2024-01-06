import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsDashboardComponent } from './rooms-dashboard.component';

describe('RoomsDashboardComponent', () => {
  let component: RoomsDashboardComponent;
  let fixture: ComponentFixture<RoomsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsDashboardComponent],
    });
    fixture = TestBed.createComponent(RoomsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
