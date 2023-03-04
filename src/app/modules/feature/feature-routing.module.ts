import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturePageComponent } from '@app/modules/feature/pages/feature-page/feature-page.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
