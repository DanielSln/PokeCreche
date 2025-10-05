import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonDatetime,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonDatetime,
    IonTitle,
  ],
})
export class CalendarioPage implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}
