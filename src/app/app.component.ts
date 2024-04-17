import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AdamRackiCV';
  name = new FormControl('');
  lastname = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');
}
