import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { TodosRoutingModule } from '@app/modules/todos/todos-routing.module';
import { SharedModule } from '@app/modules/shared/shared.module';

import { TodosPageComponent } from '@app/modules/todos/pages/todos-page/todos-page.component';

import { todosReducer } from '@app/modules/todos/store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from '@app/modules/todos/store/effects';

@NgModule({
  declarations: [TodosPageComponent],
  imports: [
    TodosRoutingModule,
    SharedModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
})
export class TodosModule {}
