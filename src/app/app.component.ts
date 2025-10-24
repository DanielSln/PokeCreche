import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
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

  get profile() {
    const name =
      localStorage.getItem('userName') ||
      (this.userType === 'docente' ? 'Prof. Maria Santos' : 'João Silva');
    const email =
      localStorage.getItem('userEmail') ||
      (this.userType === 'docente'
        ? 'maria.prof@email.com'
        : 'joao.aluno@email.com');
    return { name, email };
  }

  pagesAluno = [
    { title: 'Menu', url: '/menu', icon: 'menu', active: true },
    { title: 'Filho', url: '/filho', icon: 'filho', active: false },
    {
      title: 'Calendário',
      url: '/calendario',
      icon: 'calendario',
      active: false,
    },
    { title: 'Status', url: '/status', icon: 'status', active: false },
    {
      title: 'Comunicados',
      url: '/comunicados',
      icon: 'comunicados',
      active: false,
    },
    {
      title: 'Sair',
      url: '/login-aluno',
      icon: 'log-out',
      route: true,
      active: false,
    },
  ];

  pagesDocente = [
    { title: 'Menu', url: '/menu-docente', icon: 'menu', active: true },
    { title: 'Docente', url: '/docente', icon: 'person', active: false },
    { title: 'Editar Calendário', url: '/calendario-docente', icon: 'calendar', active: false },
    { title: 'Turmas', url: '/turmas', icon: 'people', active: false },

    {
      title: 'Comunicados',
      url: '/comunicados-docente',
      icon: 'chatbubbles',
      active: false,
    },
    {
      title: 'Sair',
      url: '/login-professor',
      icon: 'log-out',
      route: true,
      active: false,
    },
  ];

  get pages() {
    return this.userType === 'docente' ? this.pagesDocente : this.pagesAluno;
  }

  constructor(private router: Router) {
    this.addAllIcons();
    this.loadUserType();
    // atualiza o item ativo com base na rota atual e infere tipo de usuário pela rota
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects.split('?')[0];
        this.pages.forEach((p) => (p.active = p.url === currentUrl));
        // se a rota indicar área do docente, alterna o menu para docente; caso contrário usa aluno
        this.inferUserTypeFromUrl(currentUrl);
      }
    });
  }

  private inferUserTypeFromUrl(url: string) {
    const docenteRoutes = [
      '/menu-docente',
      '/docente',
      '/calendario-docente',
      '/turmas',
      '/login-professor',
    ];
    const isDocente = docenteRoutes.some((r) => url.startsWith(r));
    const inferred = isDocente ? 'docente' : 'aluno';
    if (this.userType !== inferred) {
      this.userType = inferred as 'aluno' | 'docente';
      try {
        // persiste para manter consistência em reloads
        localStorage.setItem('userType', this.userType);
      } catch (e) {
        // se localStorage não estiver disponível, apenas ignora
      }
    }
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
      // mapeamentos adicionais para nomes usados nas páginas
      calendar: calendar,
      comunicados: chatbubbles,
      chatbubbles: chatbubbles,
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
    const loginUrl =
      this.userType === 'docente' ? '/login-professor' : '/login-aluno';
    this.router.navigateByUrl(loginUrl);
  }
}
