import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.page.html',
  styleUrls: ['./login-professor.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class LoginProfessorPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  irParaLoginAluno() {
    this.router.navigateByUrl('/login-aluno');
  }

  IrParaTermosDocente () {
    this.router.navigateByUrl('/termos-docente')
  }

}
