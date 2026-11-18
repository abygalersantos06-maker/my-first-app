import { Component, input } from '@angular/core';
import type { Proficiency } from '../proficiency';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  fullName = input.required<string>();
  proficiencies = input.required<Proficiency[]>();

  year = new Date().getFullYear();
}
