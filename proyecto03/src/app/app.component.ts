import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  red: number = 255;
  green: number = 255;
  blue: number = 255;
  cambiarRed() {
    return this.red =Math.floor(Math.random() * 255);
  }
  cambiarGreen() {
    return this.green = Math.floor(Math.random() * 255);
  }
  cambiarBlue() {
    return this.blue = Math.floor(Math.random() * 255);
  }
  fondoColor() {
    document.body.style.backgroundColor = `rgb(${this.red},${this.green},${this.blue})`;
    return `rgb(${this.red},${this.green},${this.blue})`;
  }
}
