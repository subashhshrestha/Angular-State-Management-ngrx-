import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GUser } from '../models/user.interface';
import { Store } from '@ngrx/store';
import { GAppState } from '../store/state/app.state';
import { selectUserList } from '../store/selectors/user.selector';
import { GetUsers } from '../store/actions/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Observable<GUser[]>;
  constructor(private store: Store<GAppState>, private route: Router) {
    this.store.dispatch(new GetUsers());
  }

  ngOnInit() {
    this.users = this.store.select(selectUserList);
  }

  navigateToUser(login: string) {
    this.route.navigateByUrl(`home/${login}`);
  }

}
