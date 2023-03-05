import { NgModule } from '@angular/core';

import { CoreRoutingModule } from '@app/modules/core/core-routing.module';
import { SharedModule } from '@app/modules/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CoreRoutingModule, SharedModule],
})
export class CoreModule {}
