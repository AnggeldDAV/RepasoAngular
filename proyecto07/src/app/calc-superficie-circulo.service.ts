import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcSuperficieCirculoService {
  dameSuperficie(radio: number): number {
    return 3.14 * (radio**2)
  }
  constructor() { }
}
