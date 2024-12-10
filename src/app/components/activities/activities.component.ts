import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGamepad,
  faMicrophone,
  faPersonWalking,
  faUsers ,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {
  activities = [
    {
      icon: faGamepad,
      color: 'text-green-500',
      title: 'Trivias tecnológicas',
      description:
        'Pon a prueba tus conocimientos en informática y tecnología.',
    },
    {
      icon: faMicrophone,
      color: 'text-red-500',
      title: 'Karaoke navideño',
      description: 'Canta tus villancicos favoritos con un toque tecnológico.',
    },
    {
      icon:   faPersonWalking,
      color: 'text-blue-500',
      title: 'Concurso de baile',
      description: '¡Participa y muestra tus mejores pasos!',
    },
    {
      icon: faUsers, // Ícono reemplazado
      color: 'text-green-500',
      title: 'Juegos variados',
      description: '¡Disfruta de una variedad de juegos y sus premios!',
    },
  ];
}
