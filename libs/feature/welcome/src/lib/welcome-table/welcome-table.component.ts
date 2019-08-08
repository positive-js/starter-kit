import { Component, Input } from '@angular/core';

@Component({
    selector: 'welcome-table',
    templateUrl: './welcome-table.component.html',
    styleUrls: ['./welcome-table.component.scss']
})
export class WelcomeTableComponent {

    @Input() items: string[] = [];

    constructor() {
    }

}
