import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { ComponentsModule } from '../common/components/components.module';

import { PagesComponent } from './modules.component';
import { ROUTING } from './modules.routes';

@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        MaterialModule,
        ROUTING,

        ComponentsModule
    ]
})
export class PagesModule { }
