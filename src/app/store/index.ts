import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromToolbar from '../store/toolbar/toolbar.reducer';

export interface AppState {
  filter: fromToolbar.FilterState;
}

// export const reducers: ActionReducerMap<AppState> = {
// };

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  filter:fromToolbar.reducer
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
