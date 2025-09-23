import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
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
    IonTitle,
    // só mantenha os que realmente usa no HTML:
    IonButtons,
    IonMenuButton,
    IonButton,
    IonIcon,
  ],
})
export class CalendarioPage implements OnInit {
  constructor() {}

  ngOnInit() {
    // lógica inicial aqui
  }
}
