import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaNombreService {
  longitud(nombre:string):boolean {
    return (nombre.length >= 3 && nombre.length <= 50);
  }
  caracteresEspeciales(nombre: string): boolean {
    return false;
  }
  isValid(nombre: string): boolean {
    return (this.longitud(nombre) && this.caracteresEspeciales(nombre));
  }


  constructor() { }
}
