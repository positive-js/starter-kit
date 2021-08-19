import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('@mc-web/welcome/feature-welcome').then(
                (m) => m.WelcomeFeatureWelcomeModule
            )
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ManagementShellModule {}
