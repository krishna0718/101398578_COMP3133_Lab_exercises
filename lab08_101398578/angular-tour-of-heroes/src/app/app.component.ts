import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Add this
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { InputFormatDirective } from './input-format.directive'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RemoveSpacesPipe,InputFormatDirective] // ✅ Include CommonModule here
})
export class AppComponent {
  title = 'Tour of Heroes';

  heroes = [
    { id: 11, name: 'Dr-Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Tornado-Man' }
  ];

  selectedHero?: { id: number, name: string };

  onSelect(hero: any): void {
    this.selectedHero = hero;
  }
}
