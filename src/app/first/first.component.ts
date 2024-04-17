import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmoticonPipe } from '../emoticon.pipe';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  username: string | undefined;

}
