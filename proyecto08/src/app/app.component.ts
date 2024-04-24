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
  Validador: ValidaNombreService;

  constructor(ValNombre: ValidaNombreService) {
    this.Validador = ValNombre;
  }
  valida() {
    if (this.Validador.isValid(this.nombre)) {
      return this.mensaje = `${this.nombre} es valido y correcto`;
    } else {
      return this.mensaje = `${this.nombre} no es valido y es incorrecto`;
    }
    
  }
}
