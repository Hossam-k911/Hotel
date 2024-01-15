import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-nav-bar-landing-page',
  templateUrl: './nav-bar-landing-page.component.html',
  styleUrls: ['./nav-bar-landing-page.component.scss']
})
export class NavBarLandingPageComponent {

  constructor(private translate: TranslateService, public _HelperService: HelperService) {


  }

  changeLanguage() {
    this._HelperService.changeLanguage()
  }
}