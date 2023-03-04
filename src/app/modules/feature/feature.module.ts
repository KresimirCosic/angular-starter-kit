import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from '@app/modules/feature/feature-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FeaturePageComponent } from '@app/modules/feature/pages/feature-page/feature-page.component';

@NgModule({
  declarations: [FeaturePageComponent],
  imports: [SharedModule, FeatureRoutingModule],
})
export class FeatureModule {}
