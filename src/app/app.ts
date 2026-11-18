
import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import type { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Abygale Rensy D. Santos';
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

  proficiencies: Proficiency[] = [
    { tool: 'HTML and CSS', level: 'Advanced' },
    { tool: 'JavaScript', level: 'Intermediate' },
    { tool: 'PHP and SQL', level: 'Intermediate' },
    { tool: 'Figma and UI/UX Design', level: 'Advanced' }
  ];



  selectedSkill = '';

  onSkillSelected(skill: string) {
    this.selectedSkill = skill;
  }
}
