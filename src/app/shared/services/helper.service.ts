import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {

  textDir: string = 'ltr';
  // currentLang: string = localStorage.getItem('lang') == 'en' ? 'en' : 'ar';
  constructor(private _HttpClient: HttpClient, private translate: TranslateService) {
    // console.log(this.currentLang);

    translate.onLangChange.subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.lang === 'en') {
          this.textDir = 'ltr'
        }
        else {
          this.textDir = 'rtl'

        }

      }
    })
  }
  changeLanguage() {
    let currentLang = this.translate.currentLang;
    console.log(currentLang);

    if (currentLang === 'en') {
      this.translate.use('ar');
      localStorage.setItem('lang', 'ar');
    } else {
      this.translate.use('en');
      localStorage.setItem('lang', 'en');

    }
  }

  getCurrentUserData(userId: string | null): Observable<any> {
    return this._HttpClient.get(`users/${userId}`);
  }
}
