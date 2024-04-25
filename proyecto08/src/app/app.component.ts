import { Component } from '@angular/core';
import { ValidaNombreService } from './valida-nombre.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string = "";
  mensaje: string = "";
  validador: ValidaNombreService;
  pulsado: boolean = false;

  constructor(valNombre: ValidaNombreService) {
    this.validador = valNombre;
  }
  valida() {
    if (this.validador.isValid(this.nombre)) {
      return this.mensaje = `${this.nombre} es valido y correcto`;
    } else {
      return this.mensaje = `${this.nombre} no es valido y es incorrecto`;
    }
    
  }
}
