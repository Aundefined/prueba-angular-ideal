import { Component, OnInit } from '@angular/core';
import { LlamadaService } from '../services/llamada.service';
import { Persona  } from '../models/index';
import { EnviarTablas } from "../models/enviarTablas";
import { DragulaService } from 'ng2-dragula';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public datos: Persona[];
  public datos2: Persona[] = [];
  public datos3: Persona[] = [];
  tablas: EnviarTablas;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "Apellido";
  public sortOrder = "asc";


  constructor(private llamada: LlamadaService, private dragulaService: DragulaService) { 
    this.dragulaService.createGroup("alumnos", {

      revertOnSpill : true,
      
    });
  }

  ngOnInit() {



    this.llamada.GetPersonas()
      .subscribe(
        data => {
          this.datos = data;
          this.datos2[0] = null;
          for (let elem of this.datos) {
            this.datos2.push(elem);
          }
          //this.datos2 = this.datos;
          console.log(this.datos);
          console.log(this.datos2);
          console.log(this.datos3);
        }
      )
  }

  EnviarTablas(){
    this.tablas = new EnviarTablas(this.datos2, this.datos3);
    this.llamada.enviarTablas(this.tablas)
    .subscribe(
      data => {
         console.log(data);
      }
    )
  }

  show() {
    console.log(this.datos);
    console.log(this.datos2);
    console.log(this.datos3);
  }

}
