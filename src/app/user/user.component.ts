import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { GAppState } from '../store/state/app.state';
import { GetUser } from '../store/actions/user.action';
import { Observable } from 'rxjs';
import { GUser } from '../models/user.interface';
import { selectedUser } from '../store/selectors/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string;
  user: Observable<any>;
  constructor(private route: ActivatedRoute, private store: Store<GAppState>) {
    this.username = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new GetUser(this.username));
  }

  ngOnInit() {
    this.user = this.store.select(selectedUser);
    this.user.subscribe(res => console.log(res))
  }

}
