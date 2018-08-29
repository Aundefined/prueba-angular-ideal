import { Component, OnInit } from '@angular/core';
import { LlamadaService } from '../services/llamada.service';
import { Saludar } from '../models/index'

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {
   nombre: Saludar = new Saludar();
   nombrePintar:string;
  constructor(private llamada: LlamadaService) { }

  ngOnInit() {
  }

  saludar(){
    this.llamada.enviarNombre(this.nombre.Nombre)
    .subscribe(
      data =>{
        console.log(data);
        this.nombrePintar = data;
      }
    )
  }

}
