import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonMenuButton,
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
    IonMenuButton,
    IonButtons,
  ],
})

export class MenuPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  irParaFilho() {
    this.router.navigateByUrl('/filho');
 }
}