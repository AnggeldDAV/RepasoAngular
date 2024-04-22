import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = "";
  clicked: boolean = false;

  calculaLong() {
    return `${this.nombre} (${this.nombre.length})`;
  }
}
