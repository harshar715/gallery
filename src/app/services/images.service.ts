import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageResponse } from '../shared/interfaces/image-response.model';
import { HttpClient } from '@angular/common/http';
import { image_data } from '../shared/files/image-data'

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  public getPhotos(): ImageResponse {
    return image_data;
  }
}
