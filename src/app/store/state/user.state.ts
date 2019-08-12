import { GUser } from 'src/app/models/user.interface';

export interface GUserState {
    users: GUser[];
    selectedUser: GUser;
}


export const initialUserState: GUserState = {
    users: null,
    selectedUser: null
};
