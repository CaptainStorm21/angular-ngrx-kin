import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./shared/services/in-memory-data/in-memory-data-service";
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';


@NgModule({
  declarations: [AppComponent, ErrorDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule, MatToolbarModule, MatFormFieldModule,
    MatInputModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false,
      // return entity after PUT/update
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

