
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I enjoy combining creativity and technology to build meaningful digital experiences. I am always eager to learn, explore new tools, and improve my skills as an aspiring web developer.';
}
