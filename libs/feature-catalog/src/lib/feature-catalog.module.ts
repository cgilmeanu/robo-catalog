import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [CommonModule, ReactiveComponentModule],
  declarations: [CardListComponent, CardComponent],
  exports: [CardListComponent],
})
export class FeatureCatalogModule {}
