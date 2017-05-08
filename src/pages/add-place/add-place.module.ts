import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlace } from './add-place';

import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AddPlace,
  ],
  imports: [
    IonicPageModule.forChild(AddPlace),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9bmBkb9nj59-9Zj3j6250OJ_8emanJn4'
    })

  ],
  exports: [
    AddPlace
  ]
})
export class AddPlaceModule { }
