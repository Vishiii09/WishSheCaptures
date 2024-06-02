import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

interface Photo {
  id: number;
  url: string;
  category: string;
}

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  photos: Photo[] = [];
  selectedCategory: string = '';

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }
  loadPhotos(): void {
    this.photos = this.photoService.getPhotos(this.selectedCategory);
  }

  filterPhotos(category: string): void {
    this.selectedCategory = category;
    this.loadPhotos();
  }
}
