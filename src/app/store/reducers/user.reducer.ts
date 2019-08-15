import { UserActions, GUserActions } from '../actions/user.action';
import { GUserState, initialUserState } from '../state/user.state';
import { selectedUser } from '../selectors/user.selector';

export const userReducer = (state = initialUserState, action: UserActions): GUserState => {
    switch (action.type) {
        case GUserActions.GetUser: {
            return {
                ...state, selectedUser: { data: null, loading: true }
            };
        }
        case GUserActions.GetUsersSuccess: {
            return { ...state, users: action.payload };
        }

        case GUserActions.GetUserSuccess: {
            return { ...state, selectedUser: { data: action.payload, loading: false } };
        }

        default: {
            return state;
        }
    }
};
