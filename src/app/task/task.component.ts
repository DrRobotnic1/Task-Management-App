import { Component, input, Input, Output, EventEmitter } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',

  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) UserId!: string;
  @Input({ required: true }) name!: string;
  @Output() add = new EventEmitter();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.UserId);
  }

  onselect(tid: string) {}

  adding() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }
}
