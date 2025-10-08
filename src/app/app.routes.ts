import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },

  //Menu Filho
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu/menu.page').then((m) => m.MenuPage),
  },
  {
    path: 'filho',
    loadComponent: () =>
      import('./pages/filho/filho.page').then((m) => m.FilhoPage),
  },
  {
    path: 'calendario',
    loadComponent: () =>
      import('./pages/calendario/calendario.page').then(
        (m) => m.CalendarioPage
      ),
  },
  {
    path: 'status',
    loadComponent: () =>
      import('./pages/status/status.page').then((m) => m.StatusPage),
  },
  {
    path: 'comunicados',
    loadComponent: () =>
      import('./pages/comunicados/comunicados.page').then(
        (m) => m.ComunicadosPage
      ),
  },
  {
    path: 'comunicado-detalhes/:id',
    loadComponent: () =>
      import('./pages/comunicado-detalhes/comunicado-detalhes.page').then(
        (m) => m.ComunicadoDetalhesPage
      ),
  },  {
    path: 'login-aluno',
    loadComponent: () => import('./pages/login-aluno/login-aluno.page').then( m => m.LoginAlunoPage)
  },
  {
    path: 'login-professor',
    loadComponent: () => import('./pages/login-professor/login-professor.page').then( m => m.LoginProfessorPage)
  },
  {
    path: 'termos',
    loadComponent: () => import('./pages/termos/termos.page').then( m => m.TermosPage)
  },
  {
    path: 'menu-docente',
    loadComponent: () => import('./pages/menu-docente/menu-docente.page').then( m => m.MenuDocentePage)
  },

  //Menu Docente
  
];
