import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, HttpClientModule]
})
export class CadastroAlunoPage implements OnInit {
  nome: string = '';
  cpf: string = '';
  matricula: string = '';
  apiUrl = 'http://localhost:3000';

  constructor(private router: Router, private http: HttpClient, private alertCtrl: AlertController) { }

  ngOnInit() {}

  async cadastrarAluno() {
    if (!this.nome || !this.cpf || !this.matricula) return;

    this.http.post(`${this.apiUrl}/register/aluno`, { nome: this.nome, cpf: this.cpf, matricula: this.matricula })
      .subscribe(async (res: any) => {
        const alert = await this.alertCtrl.create({
          header: 'Sucesso',
          message: res.message || 'Aluno cadastrado!',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigateByUrl('/login-aluno');
      }, async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Erro',
          message: err.error?.error || 'Erro ao cadastrar',
          buttons: ['OK']
        });
        await alert.present();
      });
  }

  irParaCadastroDocente() {
    this.router.navigateByUrl('/cadastro-docente');
  }
}
