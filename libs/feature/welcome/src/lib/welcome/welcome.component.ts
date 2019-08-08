import { Component } from '@angular/core';


@Component({
    selector: 'mc-web-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

    title = 'test';
    items = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];

    constructor() {}
}
