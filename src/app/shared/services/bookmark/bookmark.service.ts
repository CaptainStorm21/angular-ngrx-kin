import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getLocaleDateTimeFormat } from '@angular/common';

export interface Bookmark {
  id: number;
  name: string;
  url: string;
  created: Date;
}

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  allBookmarks: Bookmark[] = [];
  editBookMark: Bookmark = {
    id: 0,
    name: '',
    url: '',
    created: new Date(),
  };
  filterText: string = '';

  constructor(
    private http: HttpClient,
  ) {}

  public getAll(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>('api/bookmarks');
  }

  public getById(bookmarkId: number): Observable<Bookmark> {
    return this.http.get<Bookmark>(`api/bookmarks/${bookmarkId}`);
  }

  public save(bookmark: Bookmark) {
    return this.http.post<Bookmark>(`api/bookmarks`, bookmark);
  }

  public update(bookmark: any): Observable<Bookmark> {
    return this.http.put<Bookmark>(`api/bookmarks`, bookmark);
  }
}
