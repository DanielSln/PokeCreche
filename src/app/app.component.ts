import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  IonApp,
  IonRouterOutlet,
  IonMenuToggle,
  IonMenu,
  IonHeader,
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
  happy,
  chatbubbles,
  menu,
  menuOutline,
  menuSharp,
  logOut,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonMenuToggle,
    IonMenu,
    IonHeader,
    IonContent,
    IonItem,
    IonAvatar,
    IonLabel,
    IonText,
    IonIcon,
    NgClass,
  ],
})
export class AppComponent {
  profile = {
    name: 'Daniel',
    email: 'daniel7',
  };

  pages = [
    { title: 'Menu', url: '/folder/Menu', icon: 'menu', active: true },

    {
      title: 'Filho',
      url: '/folder/Filho',
      icon: 'filho',
      active: false,
    },

    {
      title: 'Calendário',
      url: '/folder/Calendario',
      icon: 'calendario',
      active: false,
    },

    {
      title: 'Status',
      url: '/folder/Status',
      icon: 'status',
      active: false,
    },

    {
      title: 'Conversas',
      url: '/folder/Conversas',
      icon: 'conversas',
      active: false,
    },

    {
      title: 'Sair',
      url: '/folder/Sair',
      icon: 'log-out',
      route: true,
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
      conversas: chatbubbles,
      status: happy,
      menu: menu,
      menuOutline: menuOutline,
      menuSharp: menuSharp,
      'log-out': logOut,
    });
  }

  onItemTap(page: any) {
    this.pages.forEach((p) => (p.active = false));
    page.active = true;

    if (page?.route) {
      //navigate
    } else {
      this.logout();
    }
  }

  logout() {}
}
