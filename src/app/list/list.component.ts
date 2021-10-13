import { Component, OnInit } from '@angular/core';
import {
  BookmarkService,
  Bookmark,
} from '../shared/services/bookmark/bookmark.service';
import { isToday, isYesterday } from '../shared/util';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  allBookmarks: Bookmark[] = [];
  todaysBookmarks: Bookmark[] | undefined;
  yesterdaysBookmarks: Bookmark[] | undefined;
  olderBookmarks: Bookmark[] | undefined;

  constructor(public readonly bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.allBookmarks = [];
    console.log(this.allBookmarks);
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
  }
}
