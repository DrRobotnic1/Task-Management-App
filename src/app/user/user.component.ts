import {
  Component,
  input,
  Input,
  output,
  Output,
  EventEmitter,
} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',

  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output()
  select = new EventEmitter();
  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  onUserSelected() {
    this.select.emit(this.user.id);
  }
}
