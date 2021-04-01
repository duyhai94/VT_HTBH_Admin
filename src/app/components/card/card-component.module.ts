import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseCardComponent } from './base-card/base-card.component';

@NgModule({
  declarations: [BaseCardComponent],
  imports: [CommonModule],

  exports: [BaseCardComponent],
})
export class CardComponentModule {}
