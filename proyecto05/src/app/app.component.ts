import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto05';
  respuesta: boolean = false;
  paises: string[] = ["Alemania","Italia","Francia","Luxemburgo","Chile","Argentina"];
}
