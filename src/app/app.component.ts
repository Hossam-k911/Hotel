import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hotel';
  lang = localStorage.getItem('lang');

  constructor(public translate: TranslateService) {
    // if (!localStorage.getItem('lang')) {
    //   localStorage.setItem('lang', 'en');
    // }
  }
  ngOnInit(): void {
    this.lang = this.lang ? this.lang : 'en';
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
    localStorage.setItem('lang', this.lang);
  }

}
