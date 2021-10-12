import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms'; import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

@NgModule({ declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule],
  providers: [], bootstrap: [AppComponent]
}) export class AppModule { }

