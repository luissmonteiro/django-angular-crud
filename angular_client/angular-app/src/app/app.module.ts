import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { HttpClientModule } from '@angular/common/http';
import { SearchTextComponent } from './search-text/search-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PessoaDialogComponent } from './pessoa-dialog/pessoa-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaDialogComponent,
    SearchTextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
