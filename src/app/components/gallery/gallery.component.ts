import { Component, inject } from '@angular/core';
import imageApi from '../../services/image-api.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  
  images: { src: string; alt: string }[] = [];
  numberOfImages = 0;

  async ngOnInit(): Promise<void> {
    try {
      // Consumir las imágenes desde el servicio
      this.images = await imageApi.list();
      this.numberOfImages = this.images.length; // Establecer dinámicamente
    } catch (error) {
      console.error('Error al cargar imágenes:', error);
    }
  }
}
