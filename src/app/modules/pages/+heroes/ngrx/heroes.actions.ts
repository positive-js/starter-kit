import { Action } from '@ngrx/store';

import { type } from '../../../../common/utils/ngrx.utils';

export const ActionTypes = {
    LOADING:        type('[Hero] Loading'),
    LOAD_COMPLETE:  type('[Hero] Load Complete')
};

export class LoadingAction implements Action {
    public type = ActionTypes.LOADING;

    constructor(public payload: boolean) {}
}

export class LoadCompleteAction implements Action {
    public type = ActionTypes.LOAD_COMPLETE;

    constructor(public payload: any) {}
}

export type Actions
    = LoadingAction
    | LoadCompleteAction;
