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
  nome: string = '';
  id: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  irParaLoginAluno() {
    this.router.navigateByUrl('/login-aluno');
  }

  aceitarTermos() {
    if (this.nome === 'Professor' && this.id === '12345' && this.senha === 'senha123') {
      localStorage.setItem('userType', 'docente');
      localStorage.setItem('userName', this.nome);
      localStorage.setItem('userEmail', this.id + '@escola.com');
      alert('Login realizado com sucesso!');
      window.location.href = '/menu-docente';
    } else {
      alert('Credenciais inválidas! Tente novamente.');
    }
  }

}
