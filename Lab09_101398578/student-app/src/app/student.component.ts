import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `
    <h2>{{ getTitle() }}</h2>
    <p>Today's date is: {{ getCurrentDate() }}</p>
  `
})
export class StudentsComponent {
  title = 'Student Portal';

  getTitle() {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
