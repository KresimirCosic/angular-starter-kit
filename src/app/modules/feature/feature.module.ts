import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from '@app/modules/feature/feature-routing.module';

import { FeaturePageComponent } from '@app/modules/feature/pages/feature-page/feature-page.component';

@NgModule({
  declarations: [FeaturePageComponent],
  imports: [CommonModule, FeatureRoutingModule],
})
export class FeatureModule {}
