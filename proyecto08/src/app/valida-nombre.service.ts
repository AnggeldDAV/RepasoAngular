import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaNombreService {
  isValid(nombre: string): boolean {
    let expresion = RegExp("^[A-Za-z]+$");
    return (expresion.test(nombre) && nombre.length >= 3 && nombre.length <=50) 
  }
  constructor() { }
}
