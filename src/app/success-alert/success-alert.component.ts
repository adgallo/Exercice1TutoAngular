import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  template: `
    <div class="alert alert-success">
      This is the SuccessAlert Component (classic selector, template and styles in component description)
    </div>
  `,
  styles: [`
    .alert{
      font-weight: bold;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
