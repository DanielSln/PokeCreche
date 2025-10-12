import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  people,
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
  userType: 'aluno' | 'docente' = 'aluno';
  
  profile = {
    name: 'Daniel',
    email: 'daniel7',
  };

  pagesAluno = [
    { title: 'Menu', url: '/menu', icon: 'menu', active: true },
    { title: 'Filho', url: '/filho', icon: 'filho', active: false },
    { title: 'Calendário', url: '/calendario', icon: 'calendario', active: false },
    { title: 'Status', url: '/status', icon: 'status', active: false },
    { title: 'Comunicados', url: '/comunicados', icon: 'comunicados', active: false },
    { title: 'Sair', url: '/login-aluno', icon: 'log-out', route: true, active: false },
  ];

  pagesDocente = [
    { title: 'Menu', url: '/menu-docente', icon: 'menu', active: true },
    { title: 'Docente', url: '/docente', icon: 'person', active: false },
    { title: 'Turmas', url: '/turmas', icon: 'people', active: false },
    { title: 'Editar Calendário', url: '/calendario-docente', icon: 'calendar', active: false },
    { title: 'Comunicados', url: '/comunicados', icon: 'chatbubbles', active: false },
    { title: 'Sair', url: '/login-professor', icon: 'log-out', route: true, active: false },
  ];

  get pages() {
    return this.userType === 'docente' ? this.pagesDocente : this.pagesAluno;
  }

  constructor(private router: Router) {
    this.addAllIcons();
    this.loadUserType();
  }

  loadUserType() {
    const savedUserType = localStorage.getItem('userType');
    if (savedUserType) {
      this.userType = savedUserType as 'aluno' | 'docente';
    }
  }

  addAllIcons() {
    addIcons({
      filho: person,
      calendario: calendar,
      comunicados: chatbubbles,
      status: happy,
      menu: menu,
      menuOutline: menuOutline,
      menuSharp: menuSharp,
      'log-out': logOut,
      person: person,
      people: people,
    });
  }

  onItemTap(page: any) {
    this.pages.forEach((p) => (p.active = false));
    page.active = true;

    if (page.title === 'Sair') {
      this.logout();
    } else {
      this.router.navigateByUrl(page.url);
    }
  }

  logout() {
    localStorage.removeItem('userType');
    const loginUrl = this.userType === 'docente' ? '/login-professor' : '/login-aluno';
    this.router.navigateByUrl(loginUrl);
  }
}
