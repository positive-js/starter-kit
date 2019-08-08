import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
    },
    {
        path: 'welcome',
        loadChildren: () => import('@libs/feature/welcome').then(m => m.WelcomeModule)
    },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
