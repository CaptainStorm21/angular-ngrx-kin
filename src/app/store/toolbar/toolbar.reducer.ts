
import { Action, createReducer, on } from '@ngrx/store';
import { FILTER_BOOKMARKS } from './toolbar.actions';



// export const toolbarFeatureKey = 'toolbar';

export interface FilterState {
  filterText: string;
}

export const initialState: FilterState = {
  filterText: ''
};

export const toolbarReducer = createReducer(
  initialState,
  on(FILTER_BOOKMARKS,
    (_, { filterText }) =>
    ({filterText})
  )
  // tap into ngrx actions to mutate the state

);

export function reducer(
  state: FilterState | undefined,
  action: Action
) {
  return toolbarReducer(state, action)
}
