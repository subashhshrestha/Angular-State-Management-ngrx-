import { GUserState, initialUserState } from './user.state'
export interface GAppState {
    users: GUserState;
}

export const initialAppState: GAppState = {
    users: initialUserState

};

export function getInitialState(): GAppState {
    return initialAppState;
}
