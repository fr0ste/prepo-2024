
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  timeLeft: { key: string; value: number }[] = [];
  private intervalId!: any;

  ngOnInit() {
    const targetDate = new Date('2024-12-17T19:00:00');
    this.updateTimeLeft(targetDate);
    this.intervalId = setInterval(() => this.updateTimeLeft(targetDate), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateTimeLeft(targetDate: Date) {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    this.timeLeft = [
      { key: 'Días', value: days },
      { key: 'Horas', value: hours },
      { key: 'Minutos', value: minutes },
      { key: 'Segundos', value: seconds },
    ];
  }


    
}