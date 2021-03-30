import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';


@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [
    CommonModule
  ],
  exports: [PhotoGalleryComponent],
})
export class SharedModule { }
