import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { McButtonModule } from '@ptsecurity/mosaic/button';
import { McFormFieldModule } from '@ptsecurity/mosaic/form-field';
import { McInputModule } from '@ptsecurity/mosaic/input';
import { McModalModule } from '@ptsecurity/mosaic/modal';
import { McNavbarModule } from '@ptsecurity/mosaic/navbar';
import { McToggleModule } from '@ptsecurity/mosaic/toggle';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeTableComponent } from './welcome-table/welcome-table.component';
import { TestService } from './welcome/test.service';
import { WelcomeComponent } from './welcome/welcome.component';


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
