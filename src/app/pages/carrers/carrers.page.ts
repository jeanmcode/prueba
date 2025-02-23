import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalNewComponent } from 'src/app/components/modal-new/modal-new.component';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.page.html',
  styleUrls: ['./carrers.page.scss'],
})
export class CarrersPage implements OnInit {

  identity: string;

  public carrers = [
    { title: 'Ingeniería en Sistemas', id: 'system',  img:'assets/icon/base-de-datos.svg' },
    { title: 'Ingeniería en Computación', id: 'computer', img: "assets/icon/informatica.svg" },
    {title: 'Ingeniería en Telemática', id: 'telecom', img: "assets/icon/alojamiento-web.svg"},
    
  ];

  constructor(
    private localStorageService: LocalStorageService,
    private modalController: ModalController,
    public alertCtrl: AlertController,
  ) { }


  async ngOnInit() {
    // SACAR DATOS USUARIO IDENTIFICADO
    this.identity =   await  this.localStorageService.getIdentity('identity');
  }

  async openModalNew(item?)
  {
    var title;
    console.log(item)
    if(!item){ title = 'Nuevo registro'; }
    else { title = 'Editar registro';}
    const modal = await this.modalController.create({
      component: ModalNewComponent,
      cssClass: 'modal-new',
      mode:'ios',
      componentProps: {
        title
      }
    });
    await modal.present();

  }
  async openDelete(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar carrera',
      message: '¿Está seguro que desea eliminar esta carrera?',
      buttons: [
        {
          text: 'Eliminar'
        }
      ]
    });

    await alert.present();

  }

}
