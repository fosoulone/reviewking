import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyItemPage } from './modify-item';

@NgModule({
  declarations: [
    ModifyItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyItemPage),
  ],
})
export class ModifyItemPageModule {}
