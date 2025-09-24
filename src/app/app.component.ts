import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonText,
  IonIcon,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  person,
  calendar,
  notifications,
  happy,
  chatbubbles,
  menu,
  menuOutline,
  menuSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonAvatar,
    IonLabel,
    IonText,
    IonIcon,
  ],
})
export class AppComponent {
  profile = {
    name: 'Daniel',
    email: 'daniel7',
  };

  pages = [
    { title: 'Menu', 
    url: '/folder/Menu', 
    icon: 'menu', 
    active: true },

    {
      title: 'Calendário',
      url: '/folder/Calendario',
      icon: 'calendario',
      active: false,
    },
    
    {
      title: 'Notificações',
      url: '/folder/Notificacoes',
      icon: 'notificacao',
      active: false,
    },
  ];

  constructor() {
    this.addAllIcons();
  }

  addAllIcons() {
    addIcons({
      filho: person,
      calendario: calendar,
      notificacao: notifications,
      conversas: chatbubbles,
      status: happy,
      menu: menu,
      menuOutline: menuOutline,
      menuSharp: menuSharp,
    });
  }
}
