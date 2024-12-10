import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})

export class GalleryComponent {
  images = ['/IMG-1.jpg', '/IMG-2.jpg', '/IMG-3.jpg', '/IMG-4.jpg', '/IMG-5.jpg', '/IMG-6.jpg', '/IMG-7.jpg', '/IMG-8.jpg'];
}
  