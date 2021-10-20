import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FuzzyPipe } from '../shared/pipes/fuzzy.pipe';
import { StoreModule } from '@ngrx/store';
import * as fromBookmarks from '../store/bookmark';

@NgModule({
  declarations: [
    ListComponent,
    //pipes always go to declarations
    FuzzyPipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    StoreModule.forFeature(
      fromBookmarks.bookmarksFeatureKey,
      fromBookmarks.reducers,
      { metaReducers: fromBookmarks.metaReducers })
  ]
})
export class ListModule { }
