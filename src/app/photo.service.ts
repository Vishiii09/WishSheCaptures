import { Injectable } from '@angular/core';

interface Photo {
  id: number;
  url: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private photos: Photo[] = [
    { id: 1, url: '/assets/photos/image1.jpg', category: '' },
    { id: 2, url: '/assets/photos/image2.jpg', category: '' },
    { id: 3, url: '/assets/photos/image3.jpg', category: '' },
    { id: 4, url: '/assets/photos/image4.jpg', category: '' },
    { id: 5, url: '/assets/photos/image5.jpg', category: '' },
    { id: 6, url: '/assets/photos/image6.jpg', category: '' },
    { id: 7, url: '/assets/photos/image7.jpg', category: '' },
    { id: 8, url: '/assets/photos/image8.jpg', category: '' },
    { id: 9, url: '/assets/photos/image9.jpg', category: '' },
    { id: 10, url: '/assets/photos/image10.jpg', category: '' },
    { id: 11, url: '/assets/photos/image11.jpg', category: '' },
    { id: 12, url: '/assets/photos/image12.jpg', category: '' },
    { id: 1, url: '/assets/photos/image1.jpg', category: '' },
    { id: 2, url: '/assets/photos/image2.jpg', category: '' },
    { id: 3, url: '/assets/photos/image3.jpg', category: '' },
    { id: 4, url: '/assets/photos/image4.jpg', category: '' },
    { id: 5, url: '/assets/photos/image5.jpg', category: '' },
    { id: 6, url: '/assets/photos/image6.jpg', category: '' },
    { id: 7, url: '/assets/photos/image7.jpg', category: '' },
    { id: 8, url: '/assets/photos/image8.jpg', category: '' },
    { id: 9, url: '/assets/photos/image9.jpg', category: '' },
    { id: 10, url: '/assets/photos/image10.jpg', category: '' },
    { id: 11, url: '/assets/photos/image11.jpg', category: '' },
    { id: 12, url: '/assets/photos/image12.jpg', category: '' },
  ];

  getPhotos(category?: string): Photo[] {
    return category
      ? this.photos.filter((photo) => photo.category === category)
      : this.photos;
  }
}
