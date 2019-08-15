import { Component } from '@angular/core';
import { McModalService } from '@ptsecurity/mosaic/modal';


@Component({
    selector: 'mc-web-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

    title = 'test';
    items = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];

    constructor(
        private modalService: McModalService
    ) {}

    showConfirm() {
        this.modalService.success({
            mcContent: 'Сохранить сделанные изменения в запросе "Все активы с виндой"?',
            mcOkText: 'Сохранить',
            mcCancelText: 'Отмена',
            mcOnOk: () => console.log('OK')
        });
    }
}
