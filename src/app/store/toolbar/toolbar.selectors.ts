import { createSelector } from '@ngrx/store';
import {AppState} from '../../store'
import { FilterState } from './toolbar.reducer';

export const selectFilter = (
  state: AppState
) => state.filter;

export const getFilterText = createSelector(
  selectFilter,
  (filterState: FilterState) => filterState.filterText
)
