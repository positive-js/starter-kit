import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { HeroesComponent } from './heroes.component';

const ROUTES: Routes = [
    {
        path: '', component: HeroesComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
