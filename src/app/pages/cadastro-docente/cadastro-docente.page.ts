import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-docente',
  templateUrl: './cadastro-docente.page.html',
  styleUrls: ['./cadastro-docente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, HttpClientModule]
})
export class CadastroDocentePage implements OnInit {
  nome: string = '';
  identificador: string = '';
  senha: string = '';
  apiUrl = 'http://localhost:3000';

  constructor(private router: Router, private http: HttpClient, private alertCtrl: AlertController) { }

  ngOnInit() {}

  async cadastrarDocente() {
    if (!this.nome || !this.identificador || !this.senha) return;

    this.http.post(`${this.apiUrl}/register/docente`, { nome: this.nome, identificador: this.identificador, senha: this.senha })
      .subscribe(async (res: any) => {
        const alert = await this.alertCtrl.create({
          header: 'Sucesso',
          message: res.message || 'Docente cadastrado!',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigateByUrl('/login-docente');
      }, async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Erro',
          message: err.error?.error || 'Erro ao cadastrar',
          buttons: ['OK']
        });
        await alert.present();
      });
  }

  irParaCadastroAluno() {
    this.router.navigateByUrl('/cadastro-aluno');
  }
}
