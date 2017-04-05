import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pt-header',
    templateUrl: './header.html'
})
export class HeaderComponent {
    @Output()
    public openMenu = new EventEmitter();
}
