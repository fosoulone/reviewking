import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminControlPage } from './admin-control';

@NgModule({
  declarations: [
    AdminControlPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminControlPage),
  ],
})
export class AdminControlPageModule {}
