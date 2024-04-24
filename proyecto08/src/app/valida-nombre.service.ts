import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaNombreService {
  isValid(nombre: string): boolean {
    let expresion = RegExp("[a-zA-Z ]{3,50}");
    if (expresion.test(nombre)) {
      return true;
    } else {
      return false
    }
  }
  constructor() { }
}
