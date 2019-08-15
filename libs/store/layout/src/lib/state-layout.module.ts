import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { reducer } from './state/reducers';


export const ROUTING_FEATURE = 'layout';

@NgModule({
    imports: [
        CommonModule,

        StoreRouterConnectingModule.forRoot({
            stateKey: ROUTING_FEATURE
        }),

        StoreModule.forFeature(ROUTING_FEATURE, reducer)
    ]
})
export class StateLayoutModule {
}
