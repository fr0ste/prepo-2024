import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = [
    'https://i.postimg.cc/HnBKtBp1/IMG-20231219-WA0069.jpg',
    'https://i.postimg.cc/zvJ6W9Yk/IMG-20231219-WA0101.jpg',
    'https://i.postimg.cc/8PzxCQHp/IMG-20231219-WA0111.jpg',
    'https://i.postimg.cc/hPZ6zyy9/IMG-20241210-130719.jpg',
    'https://i.postimg.cc/pL97Df43/IMG-20241210-130752.jpg',
  ];
}
