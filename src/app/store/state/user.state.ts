import { GUser } from 'src/app/models/user.interface';

export interface GUserState {
    users: GUser[];
    selectedUser: {
        loading: boolean;
        data: GUser;
    };
}


export const initialUserState: GUserState = {
    users: null,
    selectedUser: {
        loading: false,
        data: null
    }
};
