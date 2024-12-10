import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
})
export class EventDetailsComponent {
  faCalendar = faCalendarAlt;
  faLocation = faMapMarkerAlt;
  faDressCode = faTshirt;

  details = [
    {
      icon: this.faCalendar,
      color: 'text-red-500',
      title: 'Fecha y Hora',
      description: '17 de Diciembre, 2024 - 7:00 PM',
    },
    {
      icon: this.faLocation,
      color: 'text-green-500',
      title: 'Ubicación',
      description: 'Salón del evento',
      link: 'https://www.google.com/maps/@16.3442861,-96.5936231,3a,75y,110.06h,82.04t/data=!3m7!1e1!3m5!1s_tAB7WfTua-bFbd8hMyJzg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.959521228799119%26panoid%3D_tAB7WfTua-bFbd8hMyJzg%26yaw%3D110.05604968015024!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D', // Enlace a Google Maps
    },
    {
      icon: this.faDressCode,
      color: 'text-blue-500',
      title: 'Código de vestimenta',
      description: 'Elegante casual',
    },
  ];
}
