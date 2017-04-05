import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { PagesComponent } from './modules.component';

const ROUTES: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: '', component: PagesComponent, redirectTo: 'heroes' },
            { path: 'heroes', loadChildren: './pages/+heroes/heroes.module#HeroesModule?chunkName=Heroes' }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
