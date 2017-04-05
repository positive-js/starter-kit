import { createSelector } from 'reselect';
import { createReducer, AppState } from '../../../../app.reducer';

import { Hero } from '../models/Hero';
import * as hero from '../ngrx/heroes.actions';

export interface State {
    ids: string[];
    entities: { [id: string]: Hero };
    selectedHeroId: string | null;
}

const initialState: State = {
    ids: [],
    entities: {},
    selectedHeroId: null
};

export interface AppStateWithHeroes extends AppState {
    heroes: State;
}

export function reducer(state = initialState, action: hero.Actions): State {
    switch (action.type) {
        case hero.ActionTypes.LOAD_COMPLETE: {

            const heroes = action.payload.results;
            const newHeroes = heroes.filter((hero) => !state.entities[hero.id]);

            const newHeroesIds = newHeroes.map((hero) => hero.id);
            const newHeroesEntities = newHeroes.reduce((entities: { [id: string]: Hero }, hero: Hero ) => {
                return Object.assign(entities, {
                    [hero.id]: hero
                });
            }, {});

            return {
                ids: [ ...state.ids, ...newHeroesIds ],
                entities: Object.assign({}, state.entities, newHeroesEntities),
                selectedHeroId: state.selectedHeroId
            };
        }

        case hero.ActionTypes.LOADING: {
            return Object.assign({}, state, {
                loading: true
            });
        }

        default: {
            return state;
        }
    }
}

export const appReducerWithHeroes = createReducer({ heroes: reducer });

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level.
 *
 */
const getEntities = (state: State) => state.entities;
const getIds = (state: State) => state.ids;

const getSelectedId = (state: State) => state.selectedHeroId;

const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map((id) => entities[id]);
});

const getHeroesState = (state: State) => state;
export const getHeroesEntities = createSelector(getHeroesState, getEntities);
