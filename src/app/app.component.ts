import { ThemeService } from './services/theme.service';
import { Component, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnowfallAnimationComponent } from './components/snowfall-animation/snowfall-animation.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RsvpFormComponent } from './components/rsvp-form/rsvp-form.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SnowfallAnimationComponent,
    HeroSectionComponent,
    EventDetailsComponent,
    TimelineComponent,
    ActivitiesComponent,
    GalleryComponent,
    RsvpFormComponent,
    FooterComponent   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prepo-2024';

  public ThemeService = inject(ThemeService);

  constructor() {}

  toggleTheme(): void {
    this.ThemeService.toggleTheme();
  }

  ngOnInit(): void {

  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
