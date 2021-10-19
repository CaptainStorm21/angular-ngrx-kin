
import { Action, createReducer, on } from '@ngrx/store';


// export const toolbarFeatureKey = 'toolbar';

export interface FilterState {
  filterText: string;
}

export const initialState: FilterState = {
  filterText: ''
};

export const toolbarReducer = createReducer(
  initialState,
  // tap into ngrx actions to mutate the state

);

export function reducer(
  state: FilterState | undefined,
  action: Action
) {
  return toolbarReducer(state, action)
}
