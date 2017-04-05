import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ENV_PROVIDERS } from './environment';

import { appReducer } from './app.reducer';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule.forRoot(),
        ROUTING,

        StoreModule.provideStore(appReducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [
        ENV_PROVIDERS
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
