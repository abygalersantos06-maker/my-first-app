
import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Abygale Santos';
  location = 'Mabalacat City, Pampanga';
  email = 'abygale.rsantos06@gmail.com';
  phone = '0922 266 2212';

  profile = 'I am an Information Technology student specializing in Web Development. I have a strong interest in frontend development, UI/UX design, and creating functional and user-friendly websites. I enjoy exploring new technologies, improving my programming skills, and turning ideas into practical digital solutions.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'PHP and SQL',
    'TypeScript',
    'Figma',
    'Canva',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
