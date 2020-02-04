import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'John Doe';
  public username: string;
  public show = false;

public welcomeMe() {
  if (this.name !== '') {
    this.show = true;
    this.username = this.name;
  } else {
  this.show = false;
  }
}
}
