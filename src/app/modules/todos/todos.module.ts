import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { TodosRoutingModule } from '@app/modules/todos/todos-routing.module';
import { SharedModule } from '@app/modules/shared/shared.module';

import { TodosPageComponent } from '@app/modules/todos/pages/todos-page/todos-page.component';

import { reducers } from '@app/modules/todos/store/reducers';

@NgModule({
  declarations: [TodosPageComponent],
  imports: [
    SharedModule,
    TodosRoutingModule,
    StoreModule.forFeature('todos', reducers),
  ],
})
export class TodosModule {}
