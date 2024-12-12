import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() photos: { src: string; alt: string }[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia de slide cada 3 segundos
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }
}
  