import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcSuperficieCuadradoService {
  dameSuperficie(lado:number):number {
    return lado ** 2;
  }
  constructor() { }
}
