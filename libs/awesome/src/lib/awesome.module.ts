import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreatComponent } from './great/great.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GreatComponent
  ],
  exports: [GreatComponent]
})
export class AwesomeModule {}
