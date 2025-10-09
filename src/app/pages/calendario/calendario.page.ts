import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonBackButton,
  IonDatetime,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

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
  IonBackButton,
    IonBackButton,
    IonDatetime,
  ],
})
export class CalendarioPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  goToMenu() {
    this.router.navigateByUrl('/menu');
  }
}
