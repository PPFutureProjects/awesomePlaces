import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetLocation } from './set-location';

import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    SetLocation,
  ],
  imports: [
    IonicPageModule.forChild(SetLocation),
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9bmBkb9nj59-9Zj3j6250OJ_8emanJn4'
    })
  ],
  exports: [
    SetLocation
  ]
})
export class SetLocationModule {}
