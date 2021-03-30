import { Component, OnInit } from '@angular/core';
3
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  public imageResponse: any;

  constructor(private flickrService: ImagesService) {
  }

  ngOnInit(): void {

    this.imageResponse = this.flickrService.getPhotos();

  }

}
