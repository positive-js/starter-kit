import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McTabsModule } from '@ptsecurity/mosaic/tabs';
import { WelcomeComponent } from './welcome.component';
import { McInputModule } from '@ptsecurity/mosaic/input';
import { McFormFieldModule } from '@ptsecurity/mosaic/form-field';
import { McToggleModule } from '@ptsecurity/mosaic/toggle';
import { McNavbarModule } from '@ptsecurity/mosaic/navbar';
import { McButtonModule } from '@ptsecurity/mosaic/button';
import { McModalModule } from '@ptsecurity/mosaic/modal';


const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        McInputModule,
        McFormFieldModule,
        McToggleModule,
        McNavbarModule,
        McButtonModule,
        McModalModule
    ],
    declarations: [
        WelcomeComponent
    ],
    exports: [
        WelcomeComponent
    ]
})
export class WelcomeFeatureWelcomeModule {}
