import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task.component';
import { AddComponent } from '../tasks/add/add.component';

@NgModule({
  declarations: [TaskComponent, TasksComponent, AddComponent],
  exports: [TaskComponent],
})
export class TaskModule {}
