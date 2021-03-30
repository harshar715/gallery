import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { CustomGuard } from 'src/app/services/custom.guard';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule
  ],
  providers: [CustomGuard]
})
export class GalleryModule { }
