import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AwesomeModule } from '@myorg/awesome';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, AwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
