import { SetLocation } from '../set-location/set-location';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Location } from '../../models/location'
import { Camera } from '@ionic-native/camera';


/**
 * Generated class for the AddPlace page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlace {

  location: Location = new Location(-3.730868, -38.520718);
  locationIsSet :boolean =false

  constructor(public navCtrl: NavController, public navParams: NavParams, private modelCtrl: ModalController) {
  }

  onOpenMap() {
    const modal = this.modelCtrl.create('SetLocation', { "location": this.location , isSet : this.locationIsSet })
      modal.onDidDismiss(data =>{
        if(data){
          this.location = data.location;
          this.locationIsSet=true;
          console.log(data.location)
        }
      })
      modal.present()
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlace');
  }

}
