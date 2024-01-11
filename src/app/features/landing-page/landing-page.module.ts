import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavBarLandingPageComponent } from './components/nav-bar-landing-page/nav-bar-landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './modules/home/components/home/home.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavBarLandingPageComponent,
    FooterComponent,
  ],
  imports: [CommonModule, LandingPageRoutingModule, SharedModule],
})
export class LandingPageModule {}
