import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export const bookmarksFeatureKey = 'bookmarks';

export interface BookmarksState {

}

export const reducers: ActionReducerMap<BookmarksState> = {

};


export const metaReducers: MetaReducer<BookmarksState>[] = !environment.production ? [] : [];
