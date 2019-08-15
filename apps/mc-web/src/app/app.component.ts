import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppTheme } from '@libs/api-models';
import { LayoutFacade } from '@libs/store/layout';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    currentModelTheme: AppTheme;
    currentTheme: AppTheme;

    constructor(
        private renderer: Renderer2,
        private layoutFacade: LayoutFacade
    ) {}

    ngOnInit() {
        this.layoutFacade.getTheme().subscribe((theme) => {
            this.changeThemeOnBody(theme);
        });
    }

    themeChange(newTheme: AppTheme) {
        this.layoutFacade.setTheme(newTheme);
    }

    private changeThemeOnBody(theme) {
        if (theme) {
            this.renderer.removeClass(document.body, `theme-${this.currentTheme}`);
            this.currentTheme = this.currentModelTheme = theme;
            this.renderer.addClass(document.body, `theme-${theme}`);
        }
    }
}
