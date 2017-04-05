import { Component, Input } from '@angular/core';

@Component({
    selector: 'pt-sidenav',
    templateUrl: './sidebar.tpl.html',
    styleUrls: [ './sidebar.scss' ]
})
export class SidenavComponent {
    @Input()
    public open = false;
}
