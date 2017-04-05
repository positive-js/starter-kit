import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as hero from './ngrx/heroes.actions';
import * as fromReducer from './ngrx/heroes.reducer';

@Component({
    selector: 'pt-heroes',
    template: require('./heroes.component.html')
})
export class HeroesComponent implements OnInit {

    public heroes$: Observable<any>;

    constructor(private store: Store<fromReducer.AppStateWithHeroes>) {
        // store.replaceReducer(fromReducer.appReducerWithHeroes);

        // this.heroes$ = store.select(fromReducer.getHeroesEntities);

    }

    public ngOnInit() {

        this.store.dispatch(new hero.LoadingAction(true));
    }
}
