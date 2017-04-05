import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, NoPreloading }  from '@angular/router';

const ROUTES: Routes = [
    { path: '', loadChildren: './modules/modules.module#PagesModule?chunkName=Modules' }
];

const ROUTER_CONFIG = { useHash: true, preloadingStrategy: NoPreloading };

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, ROUTER_CONFIG);
