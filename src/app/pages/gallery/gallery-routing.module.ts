import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomGuard } from 'src/app/services/custom.guard';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  { path: '', component: GalleryComponent, canActivate: [CustomGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
