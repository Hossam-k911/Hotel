import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLandingPageComponent } from './nav-bar-landing-page.component';

describe('NavBarLandingPageComponent', () => {
  let component: NavBarLandingPageComponent;
  let fixture: ComponentFixture<NavBarLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarLandingPageComponent]
    });
    fixture = TestBed.createComponent(NavBarLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
