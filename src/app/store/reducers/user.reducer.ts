import { UserActions, GUserActions } from '../actions/user.action';
import { GUserState, initialUserState } from '../state/user.state';

export const userReducer = (state = initialUserState, action: UserActions): GUserState => {
    switch (action.type) {
        case GUserActions.GetUsersSuccess: {
            return { ...state, users: action.payload };
        }

        case GUserActions.GetUserSuccess: {
            return { ...state, selectedUser: action.payload };
        }

        default: {
            return state;
        }
    }
};
