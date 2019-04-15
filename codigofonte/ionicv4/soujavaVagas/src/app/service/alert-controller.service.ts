import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertControllerService {

  constructor(private alert: AlertController) { }


  public async showBasic(header: string, message: string) {
    const alert = await this.alert.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }


}
