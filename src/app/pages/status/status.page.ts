import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonItem,
  IonIcon,
  IonLabel,
  IonProgressBar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { restaurantOutline, happyOutline, peopleOutline } from 'ionicons/icons';


@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonItem,
    IonIcon,
    IonLabel,
    IonProgressBar,
  ],
})

export class StatusPage implements OnInit {
  constructor() {
    addIcons({
      'restaurant-outline': restaurantOutline,
      'happy-outline': happyOutline,
      'people-outline': peopleOutline
    });
  }
  
  status = [
    {
      titulo: 'Alimentação',
      mensagem: 'Seu filho está indo bem!',
      icone: 'restaurant-outline',
      cor: 'danger',
      valor: 75
    },
    {
      titulo: 'Comportamento',
      mensagem: 'Seu filho é um exemplo para todos!',
      icone: 'happy-outline',
      cor: 'success',
      valor: 100
    },
    {
      titulo: 'Presença',
      mensagem: 'Seu filho está comparecendo frequentemente!',
      icone: 'people-outline',
      cor: 'primary',
      valor: 88
    }
  ];


  ngOnInit() {}
}
