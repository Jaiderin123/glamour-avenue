import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private alertController: AlertController) {}
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Formulario enviado',
      message: 'Tus comentarios han sido enviado con exito revisa tu correo para estar al tanto de tu ticket',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
