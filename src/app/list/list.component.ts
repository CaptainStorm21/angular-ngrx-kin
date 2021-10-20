import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  BookmarkService,
  Bookmark,
} from '../shared/services/bookmark/bookmark.service';
import { isToday, isYesterday } from '../shared/util';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/index';
import { getFilterText } from '../store/toolbar/toolbar.selectors';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  allBookmarks: Bookmark[] = [];
  todaysBookmarks: Bookmark[] | undefined;
  yesterdaysBookmarks: Bookmark[] | undefined;
  olderBookmarks: Bookmark[] | undefined;
  filterText$: Observable<string> | undefined;

  constructor(
    public readonly bookmarkService: BookmarkService,
    public readonly store$: Store< AppState >
  ) {
    // this.allBookmarks = [];
    // this.allBookmarks = this.bookmarkService.allBookmarks;
    // console.log(this.allBookmarks);
    // console.log(this.bookmarkService.allBookmarks);
  }

  ngOnInit() {
    this.allBookmarks = this.bookmarkService.allBookmarks;
    this.todaysBookmarks = this.allBookmarks.filter((bookmark) =>
      isToday(bookmark.created)
    );
    this.yesterdaysBookmarks = this.allBookmarks.filter((bookmark) =>
      isYesterday(bookmark.created)
    );
    this.olderBookmarks = this.allBookmarks.filter((bookmark) => {
      return (
        !this.todaysBookmarks?.find((b) => b.id === bookmark.id) &&
        !this.yesterdaysBookmarks?.find((b) => b.id === bookmark.id)
      );
    });
    this.filterText$ = this.store$.select(getFilterText)
  }

}
