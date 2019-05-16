import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MsiModule } from './msi/msi.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MsiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
