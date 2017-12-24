import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test-list.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    AboutComponent,
    TestComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
