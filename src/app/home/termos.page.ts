import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-termos',
  templateUrl: 'termos.page.html',
  styleUrls: ['termos.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonButton ],
})
export class TermosPage {
  constructor() {}
}

