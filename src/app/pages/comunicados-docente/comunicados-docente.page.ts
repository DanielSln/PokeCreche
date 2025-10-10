import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-comunicados-docente',
  templateUrl: './comunicados-docente.page.html',
  styleUrls: ['./comunicados-docente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComunicadosDocentePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
