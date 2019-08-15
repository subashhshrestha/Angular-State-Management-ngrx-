import { GAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { GUserState } from '../state/user.state';

const selectUsers = (state: GAppState) => state.users;

export const selectUserList = createSelector(
    selectUsers,
    (state: GUserState) => state.users
);

export const selectedUser = createSelector(
    selectUsers,
    (state: GUserState) => state.selectedUser
);
