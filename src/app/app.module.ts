import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { ActiveButtonDirective } from './directives/active-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCardComponent,
    ActiveButtonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
