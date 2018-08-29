
import { Component, OnInit } from '@angular/core';
import { LlamadaService } from '../services/llamada.service';
import { Numeros, Resultado } from '../models/index'

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {

  num: Numeros = new Numeros();
  resultado: Resultado;
  suma: number;
  resta: number;
  producto: number;

  constructor(private llamada: LlamadaService) { }

  ngOnInit() { }

  calcular() {
    this.llamada.enviarNumeros(this.num.valor1, this.num.valor2)
      .subscribe(
        data => {
          console.log(data)
          this.resultado = data;
        }

      )
  }

  vaciar() {
    this.num.valor1 = 0;
    this.num.valor2 = 0;
    this.resultado = null;
  }

}
