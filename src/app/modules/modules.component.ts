import { Component } from '@angular/core';

@Component({
    selector: 'pt-pages',
    template: require('./modules.component.html')
})
export class PagesComponent {
    public showSidenav$: boolean;

    constructor() {
        this.showSidenav$ = false;
    }

    public closeSidenav() {
        this.showSidenav$ = false;
    }

    public openSidenav() {
        this.showSidenav$ = true;
    }
}
