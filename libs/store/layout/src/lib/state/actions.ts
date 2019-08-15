import { AppTheme } from '@libs/api-models';
import { createAction, props } from '@ngrx/store';


export const setAppTheme = createAction('[Layout] Set App Theme', props<{ theme: AppTheme }>());
