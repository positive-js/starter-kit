import { Injectable } from '@angular/core';
import { AppTheme } from '@libs/api-models';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { setAppTheme } from './actions';
import { IState } from './reducers';
import { getSelectorTheme } from './selectors';


@Injectable({
    providedIn: 'root'
})
export class LayoutFacade {

    constructor(
        private store: Store<IState>
    ) {}

    getTheme(): Observable<AppTheme> {
        return this.store.pipe(select(getSelectorTheme));
    }

    setTheme(theme: AppTheme) {
        this.store.dispatch(setAppTheme({ theme }));
    }
}
