import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'app-root-cnt'
  }
})
export class AppComponent {
  title = 'sample';
}
