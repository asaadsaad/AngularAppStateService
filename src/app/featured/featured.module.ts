import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeaturedComponent } from './featured.component';

@NgModule({
  declarations: [FeaturedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FeaturedComponent }
    ])
  ]
})
export class FeaturedModule { }
