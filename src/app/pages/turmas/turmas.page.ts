import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonButtons, IonBackButton]
})
export class TurmasPage implements OnInit {

  query: string = '';

  turmas = Array.from({length: 12}).map((_,i) => ({ id: (i*37 + 32).toString().padStart(4,'0'), selected: false }));

  selectedTurma: any = null;
  studentsByTurma: Record<string, any[]> = {};

  constructor(private router: Router) { }

  ngOnInit() {}

  filteredTurmas() {
    const q = this.query?.trim();
    if (!q) return this.turmas;
    return this.turmas.filter(t => t.id.includes(q));
  }

  selectTurma(t:any) {
    this.selectedTurma = t;
    if (!this.studentsByTurma[t.id]) {
      this.studentsByTurma[t.id] = Array.from({length:6}).map((_,i) => ({
        id: `${t.id}-${i+1}`,
        name: 'Nome',
        avatar: 'assets/img/avatar.jpg',
        falta: false
      }));
    }
  }

  backToList() {
    this.selectedTurma = null;
  }

  toggleFalta(student:any, ev?: Event) {
    ev?.stopPropagation();
    student.falta = !student.falta;
  }

  openStatus(student:any) {
    this.router.navigateByUrl('/status');
  }

}
