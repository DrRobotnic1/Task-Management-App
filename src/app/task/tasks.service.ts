import { Injectable } from '@angular/core';
import { NewTaskData } from './tasks/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks(Id: string) {
    return this.dummyTasks.filter((task) => task.userId === Id);
  }

  addTask(taskData: NewTaskData, UserId: string) {
    return this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      userId: UserId,
      title: taskData.title,
      summary: taskData.summury,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    return (this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id));
  }
}
