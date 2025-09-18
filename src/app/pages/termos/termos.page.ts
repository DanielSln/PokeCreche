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

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-termos',
  templateUrl: 'termos.page.html',
  styleUrls: ['termos.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonButton,
    RouterLink,
  ],
})
export class TermosPage {
  constructor(private router: Router) {}
  //Função para aceitar os termos e ir para a página do menu inicial!
  aceitarTermos() {
    this.router.navigateByUrl('/menu');
  }
}
