import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentComponent } from '@app/modules/shared/components/shared-component/shared-component.component';

const sharedModules = [CommonModule];

const sharedComponents = [SharedComponentComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedComponents],
})
export class SharedModule {}
