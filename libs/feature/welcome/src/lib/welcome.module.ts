import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    McInputModule,
    McFormFieldModule,
    McToggleModule,
    McNavbarModule,
    McButtonModule,
    McModalModule
} from '@ptsecurity/mosaic';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeTableComponent } from './welcome-table/welcome-table.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
    declarations: [
        WelcomeComponent,
        WelcomeTableComponent
    ],
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        McInputModule,
        McFormFieldModule,
        McToggleModule,
        McNavbarModule,
        McButtonModule,
        McModalModule,
        FormsModule
    ]
})
export class WelcomeModule {
}
