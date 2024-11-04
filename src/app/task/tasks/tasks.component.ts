import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',

  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) task!: Task;

  @Output() complete = new EventEmitter();

  emittingId() {
    this.complete.emit(this.task.id);
    console.log(this.task.id);
  }
}
