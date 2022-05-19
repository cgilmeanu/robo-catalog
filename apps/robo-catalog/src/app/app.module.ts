import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataModule } from '@robo/data';
import { FeatureCatalogModule } from '@robo/feature-catalog';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataModule, FeatureCatalogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
