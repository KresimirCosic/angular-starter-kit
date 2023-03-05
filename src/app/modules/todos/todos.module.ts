import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { TodosRoutingModule } from '@app/modules/todos/todos-routing.module';
import { SharedModule } from '@app/modules/shared/shared.module';

import { TodosPageComponent } from '@app/modules/todos/pages/todos-page/todos-page.component';

import { todosReducer } from '@app/modules/todos/store/reducer';

@NgModule({
  declarations: [TodosPageComponent],
  imports: [
    TodosRoutingModule,
    SharedModule,
    StoreModule.forFeature('todos', todosReducer),
  ],
})
export class TodosModule {}
