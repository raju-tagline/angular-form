import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'forms';
  public currentTime = new Date();
  details = `The built-in pipes are those which are already given to us by the Angular and are ready to use. `;
}
