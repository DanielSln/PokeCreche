import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.page.html',
  styleUrls: ['./login-aluno.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class LoginAlunoPage implements OnInit {
 
  constructor(private router: Router) { }
 
  ngOnInit() {}
 
  irParaLoginProfessor() {
    this.router.navigateByUrl('/login-professor');
  }
 
 
  irParaTermos() {
    localStorage.setItem('userType', 'aluno');
    window.location.href = '/termos';
  }
 
}