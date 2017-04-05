import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SidenavComponent } from './sidebar';
import { HeaderComponent } from './header';

export const COMPONENTS = [
    SidenavComponent,
    HeaderComponent
];

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule { }
