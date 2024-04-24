import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms' 
import { CalculadoraService } from './calculadora.service';
import { CalcSuperficieCirculoService } from './calc-superficie-circulo.service';
import { CalcSuperficieCuadradoService } from './calc-superficie-cuadrado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto07';
  numero: number = 0;
  valorRadio: string = "";
  mensaje: string = '';
  private SerCalc: CalculadoraService; //Ejemplo jacinto
  private ServCiur: CalcSuperficieCirculoService;
  private ServCuad: CalcSuperficieCuadradoService;
  

  constructor(calcServ: CalculadoraService, calcCir: CalcSuperficieCirculoService, calcCuad: CalcSuperficieCuadradoService) {
    let numero1 = 18;
    let numero2 = 9;
    this.SerCalc = calcServ;
    console.log(`Suma: ${this.SerCalc.dameSuma(numero1, numero2)}`);
    console.log(`Resta: ${this.SerCalc.dameResta(numero1, numero2)}`);
    console.log(`Multiplicacion: ${this.SerCalc.dameMultiplicacion(numero1, numero2)}`);
    console.log(`Division: ${this.SerCalc.dameDivision(numero1, numero2)}`);


    this.ServCiur = calcCir;
    this.ServCuad = calcCuad;
  }

  elegir() {
    if (this.valorRadio == "circulo") {
      return this.ServCiur.dameSuperficie(this.numero);
    } else if (this.valorRadio == "cuadrado") {
      return this.ServCuad.dameSuperficie(this.numero);
    } else {
      return "Seleccione una opcion"
    }
  }
  muestra() {
    return this.mensaje = `Resultado:${this.elegir()}`;
  }
}
