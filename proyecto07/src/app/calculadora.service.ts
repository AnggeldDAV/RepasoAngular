import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  dameSuma(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
  dameResta(numero1: number, numero2: number): number {
    return numero1 - numero2;
  }
  dameMultiplicacion(numero1: number, numero2: number): number {
    return numero1 * numero2;
  }
  dameDivision(numero1: number, numero2: number): number {
    return numero1 / numero2;
  }
  constructor() { }
}
