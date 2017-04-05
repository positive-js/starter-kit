import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pt-app',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None, // set global styles
    styleUrls: [ './app.main.scss' ]
})
export class AppComponent { }
