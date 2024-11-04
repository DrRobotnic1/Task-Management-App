import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { User } from '../../user/user.model';
import { DUMMY_USERS } from '../../user/dummy-users';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../task/tasks/task.model';
import { TasksService } from '../../task/tasks.service';

@Component({
  selector: 'app-add',

  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  @Output() close = new EventEmitter<void>();

  @Input({ required: true }) userId!: string;

  enteredTitle = '';
  enteredSummury = '';
  enteredDate = '';

  private tasksService = inject(TasksService);
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summury: this.enteredSummury,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
