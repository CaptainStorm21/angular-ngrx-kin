
import {
  Component,
  ChangeDetectionStrategy
} from "@angular/core";
import { Store } from '@ngrx/store';

import { AppState } from '../app/store';
import { FILTER_BOOKMARKS } from './store/toolbar/toolbar.actions';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  value = '';
  constructor
    (public readonly store$: Store<AppState>) { }

  onFilterChange(filterText: string): void {

      this.store$.dispatch(FILTER_BOOKMARKS({filterText}))
    }
}
