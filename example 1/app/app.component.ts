import { Component } from '@angular/core';
export class Ex{
  id: number;
  name: string;
}
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`
})
export class AppComponent {
  title = 'example';
  example: Ex = {
    id: 1,
    name: 'jayakrishnan'
  };
  value = '';
  update(value: string) { this.value = value; }
  message='';
  onClickMe()
  {
    this.message="thank you";
  }
  }
