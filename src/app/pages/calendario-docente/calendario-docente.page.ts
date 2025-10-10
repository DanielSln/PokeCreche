import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonBackButton,
  IonDatetime,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario-docente',
  templateUrl: './calendario-docente.page.html',
  styleUrls: ['./calendario-docente.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonBackButton,
    IonDatetime,
  ],
})
export class CalendarioDocentePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToMenu() {
    this.router.navigateByUrl('/menu-docente');
  }
}
