import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'termos',
    loadComponent: () => import('./home/termos.page').then((m) => m.TermosPage),
  },
  {
    path: '',
    redirectTo: 'termos',
    pathMatch: 'full',
  },  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'filho',
    loadComponent: () => import('./pages/filho/filho.page').then( m => m.FilhoPage)
  },

];
