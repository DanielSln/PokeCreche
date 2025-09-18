import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonMenu,
  IonMenuButton,
  IonApp,
  IonList,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonMenu,
    IonMenuButton,
    IonApp,
    IonList,
    IonButtons,
  ],
})
export class MenuPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

export class ExampleComponent {}
