import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enigma';

  enigmaElapsed = Date.now()
enigma = new Date(this.enigmaElapsed)


}
