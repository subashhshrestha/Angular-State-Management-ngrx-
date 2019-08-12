import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { GAppState } from '../state/app.state';
import { GetUser, GUserActions, GetUsersSuccess, GetUserSuccess, GetUsers } from '../actions/user.action';
import { map, switchMap } from 'rxjs/operators';
import { GUser } from '../../models/user.interface';

@Injectable()
export class UserEffects {
    constructor(private action: Actions, private service: UserService, private store: Store<GAppState>) { }
    @Effect()
    getUsers = this.action.pipe(
        ofType<GetUsers>(GUserActions.GetUsers),
        switchMap(() => this.service.getUsers().pipe(
            map(data => new GetUsersSuccess(data))
        ))
    );

    @Effect()
    getUser = this.action.pipe(
        ofType<GetUser>(GUserActions.GetUser),
        switchMap((data) => {
            return this.service.getUser(data.payload).pipe(
                map(data => new GetUserSuccess(data))
            );
        })

    );

}
