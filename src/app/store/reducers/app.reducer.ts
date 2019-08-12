import { ActionReducerMap } from '@ngrx/store';
import { GAppState } from '../state/app.state';
import { userReducer } from './user.reducer';

export const appReducer: ActionReducerMap<GAppState, any> = {
    users : userReducer
};
