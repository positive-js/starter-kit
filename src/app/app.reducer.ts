import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

export interface AppState { }

export const createReducer = (asyncReducers = {}): ActionReducer<any> => {
    return combineReducers(Object.assign({ }, asyncReducers));
};

export const appReducer = createReducer();
