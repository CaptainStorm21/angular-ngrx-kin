import { createAction, props } from '@ngrx/store';

// export const loadToolbars = createAction(
//   '[Toolbar] Load Toolbars'
// );

// function that accepts the payload filterText(carrier)
// that carries the filter of the list of the bookmarks
// similar to the ship that picked up a list of containers
// and carries those chosen container across the ocean
export const FILTER_BOOKMARKS = createAction(
  '[Toolbar] Load Toolbars',
  props<{filterText: string}>()
)

