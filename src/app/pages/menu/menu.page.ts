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

import { Router, RouterLink } from '@angular/router';

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
    RouterLink
  ],
})

export class MenuPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  irParaFilho() {
    this.router.navigateByUrl('/filho');
  }
 }
