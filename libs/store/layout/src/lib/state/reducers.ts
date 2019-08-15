import { AppTheme } from '@libs/api-models';
import { Action, createReducer, on } from '@ngrx/store';

import * as LayoutActions from './actions';


export interface IState {
    theme: AppTheme;
}

const initialState: IState = {
    theme: 'default'
};

const layoutReducer = createReducer(
    initialState,
    on(LayoutActions.setAppTheme, (state, action) => ({
        ...state,
        theme: action.theme
    }))
);

export function reducer(state: IState | undefined, action: Action) {
    return layoutReducer(state, action);
}
