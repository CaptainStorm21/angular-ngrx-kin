import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { BookmarkService } from '../shared/services/bookmark/bookmark.service';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditComponent implements OnDestroy {

  bookmarkForm: FormGroup;
  bookmarkUpdate$: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private bookmarkService: BookmarkService,
    private router: Router,
    private readonly dialog: MatDialog
  ) {
    this.bookmarkForm = this.fb.group({
      name: [this.bookmarkService.editBookMark.name,
            Validators.required],
      url: [this.bookmarkService.editBookMark.url,
            Validators.required]
    })
  }

  onSubmit() {
    this.bookmarkUpdate$ = this.bookmarkService.update({
      id: this.bookmarkService.editBookMark.id,
      ...this.bookmarkForm.value,
      created: moment().toDate()
    }).subscribe(
      () => { this.router.navigate(['/list']); },
      () => this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: { errorMessage: 'Sorry, unable to update bookmark' }
      })
    );
  }

  ngOnDestroy() {
    if (this.bookmarkUpdate$) {
      this.bookmarkUpdate$.unsubscribe();
    }
  }
}
