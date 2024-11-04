import { Component } from '@angular/core';

import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,

  templateUrl: './app.Component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId? = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  // selected = this.selectedUser.name;

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log(this.selectedUser.name);
  }
}
