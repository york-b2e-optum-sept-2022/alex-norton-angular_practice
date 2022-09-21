import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MemoComponent} from "./memo/memo.component";
import {MemoInputComponent} from "./memo-input/memo-input.component";
import {MemoListComponent} from "./memo-list/memo-list.component";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MemoComponent,
    MemoInputComponent,
    MemoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
