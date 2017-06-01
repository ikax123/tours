import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'app-translate',
    templateUrl: './translate.component.html'
})
export class TranslateComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "ge","ru"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/ge|en|ru/) ? browserLang : 'en');
    }
}

