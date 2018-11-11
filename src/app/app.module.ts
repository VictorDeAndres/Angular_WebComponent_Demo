import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { IncrButtonComponent } from './incr-button/incr-button.component';

@NgModule({
  declarations: [
    IncrButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    IncrButtonComponent
  ]
})

export class AppModule {
  constructor(
    private injector: Injector
  ) {
    const el = createCustomElement(IncrButtonComponent, { injector });
    customElements.define('webcomponentdemo-custom-button', el);
  }
  ngDoBootstrap() {}
}

