import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as hero from './heroes.actions';
import { HeroesServices } from '../services/heroes.services';

@Injectable()
export class HeroEffects {

    @Effect()
    public loadHeroes$: Observable<Action> = this.actions$
        .ofType(hero.ActionTypes.LOADING)
        .debounceTime(300)
        .switchMap(() =>
            this.heroesService.getHeroes()
                .map((heroes) => new hero.LoadCompleteAction(heroes))
        );

    constructor(private actions$: Actions, private heroesService: HeroesServices) {}
}
