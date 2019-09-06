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
import { TestService } from './welcome/test.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        WelcomeComponent,
        WelcomeTableComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        WelcomeRoutingModule,
        McInputModule,
        McFormFieldModule,
        McToggleModule,
        McNavbarModule,
        McButtonModule,
        McModalModule,
        FormsModule
    ],
    providers: [TestService]
})
export class WelcomeModule {
}
