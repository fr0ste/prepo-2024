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
        'Conecta con tu ingenio y descubre lo increíble que es aprender mientras te diviertes. ¡El conocimiento nunca fue tan emocionante!',
    },
    {
      icon: faMicrophone,
      color: 'text-red-500',
      title: 'Karaoke',
      description:
        'Libera tu voz y deja que el espíritu navideño brille. ¡Tus canciones favoritas te esperan para crear momentos inolvidables!',
    },
    {
      icon: faPersonWalking,
      color: 'text-blue-500',
      title: 'Concurso de baile',
      description:
        'Deja que la música te guíe y muestra al mundo tus mejores pasos. ¡El escenario es tuyo, y la diversión está garantizada!',
    },
    {
      icon: faUsers,
      color: 'text-green-500',
      title: 'Juegos variados',
      description:
        'Sumérgete en momentos de alegría y compañerismo. ¡Descubre la magia de jugar y ganar en equipo!',
    },
  ];
}
