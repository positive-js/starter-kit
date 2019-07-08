import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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

        StoreDevtoolsModule.instrument({
            name: 'mc-web',
            logOnly: environment.production
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
