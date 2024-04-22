import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre1: string = "";
  nombre2: string = "";
  nuevaCadena: string[] = [];
  clicked: boolean = false;
  letrasIguales() {
    this.nuevaCadena = [];
    let nom1 = this.nombre1.split("");
    let nom2 = this.nombre2.split("");
    for (let letra of nom1) {
      for (let letra2 of nom2) {
        if (letra == letra2 && !this.nuevaCadena.includes(letra)) {
          this.nuevaCadena.push(letra);
        }
      }
    }
    return `Coinciden: ${this.nuevaCadena.join(",")}`
  }  
}
