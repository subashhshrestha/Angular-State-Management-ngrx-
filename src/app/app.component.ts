import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GAppState } from './store/state/app.state';
import { GetUsers, GetUser } from './store/actions/user.action';
import { GUser } from './models/user.interface';
import { selectUserList, selectedUser } from './store/state/user.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'newngrx';
  user: Observable<GUser>;

}
