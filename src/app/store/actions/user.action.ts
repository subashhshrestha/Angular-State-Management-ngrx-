import { Action } from '@ngrx/store';
import { GUser } from 'src/app/models/user.interface';

export enum GUserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
    public readonly type = GUserActions.GetUsers;
}


export class GetUsersSuccess implements Action {
    public readonly type = GUserActions.GetUsersSuccess;
    constructor(public payload: GUser[]) { }
}

export class GetUser implements Action {
    public readonly type = GUserActions.GetUser;
    constructor(public payload: string) { }

}


export class GetUserSuccess implements Action {
    public readonly type = GUserActions.GetUserSuccess;
    constructor(public payload: GUser) { }
}

export type UserActions = GetUser
    | GetUserSuccess
    | GetUsers
    | GetUsersSuccess;
