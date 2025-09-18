import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader],
})

export class AppComponent {
  constructor() {}
}
