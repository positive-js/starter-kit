import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { McNavbarModule } from '@ptsecurity/mosaic/navbar';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,

        BrowserModule,
        BrowserAnimationsModule,

        FormsModule,
        McNavbarModule,

        StoreDevtoolsModule.instrument({
            name: 'mc-web',
            logOnly: environment.production
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
