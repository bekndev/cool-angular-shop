import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartTotalCount: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(data => {
      this.cartTotalCount = data.shopping['cartTotalCount'];
    }).subscribe();
  }

}
