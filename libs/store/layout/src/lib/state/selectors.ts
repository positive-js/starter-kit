import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IState } from './reducers';


const getTheme = (state: IState) => state.theme;

const selectLayoutState = createFeatureSelector<IState>('layout');


export const getSelectorTheme = createSelector(
    selectLayoutState,
    getTheme
);
