import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.scss'
})
  
export class RsvpFormComponent {
  userName: string = '';
  songName: string = '';

  submitForm() {
    // URL base del formulario de Google
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeZ_WcNUI-K6pFKujmoibX3A2nwzshz9KJ_lTpnmHqWurrqBw/formResponse';

    // Construcción de parámetros
    const params = new URLSearchParams({
      'usp': 'pp_url',
      'entry.1884265043': this.userName, // Nombre del usuario
      'entry.947742883': this.songName   // Nombre de la canción
    });

    // Envía los datos al formulario
    fetch(`${formUrl}?${params.toString()}`, {
      method: 'POST',
      mode: 'no-cors' // Necesario para evitar errores de CORS
    })
      .then(() => {
        alert('Datos enviados exitosamente.');
        this.resetForm();
      })
      .catch((error) => {
        console.error('Error al enviar datos:', error);
        alert('Ocurrió un error al enviar los datos. Inténtalo de nuevo.');
      });
  }

  resetForm() {
    this.userName = '';
    this.songName = '';
  }
}         
