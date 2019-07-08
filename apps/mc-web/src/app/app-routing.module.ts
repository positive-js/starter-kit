import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    }
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
