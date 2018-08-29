import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Numeros, Usuario, Saludar, LoginResponse, Persona } from "../models/index";
import { EnviarTablas } from "../models/enviarTablas"
import 'rxjs/add/operator/map';




@Injectable({
  providedIn: 'root'
})
export class LlamadaService {

  Url: string = "http://localhost:58641/api/calculo/calcular";
  loginUrl: string = "http://localhost:58641/api/login/authenticate";
  saludarUrl: string = "http://localhost:58641/api/calculo/saludar";
  personasUrl:string = "http://localhost:58641/api/calculo/GetPersonas";
  enviarTablasUrl:string = "http://localhost:58641/api/calculo/EnviarTablas";

  usuario: Usuario = new Usuario();

  constructor(private http: HttpClient) { }


  loginUsuario(usuario: string, password: string) {

    this.usuario.nombre = usuario;
    this.usuario.password = password;

    let header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    let params = new HttpParams()
      .append('Nombre', this.usuario.nombre)
      .append('Password', this.usuario.password)

    let requestBody = params.toString();

    return this.http.post<LoginResponse>(this.loginUrl, requestBody, { headers: header })
      .map(resp => {

        return resp;

      }
      );
  }



  enviarNumeros(num1: number, num2: number) {

    let token: string = sessionStorage.getItem('token');

    let header = new HttpHeaders({
      "Authorization": token,
      "Content-Type": "application/json",

    })

    let body = new Numeros(num1, num2);

    return this.http.post<any>(this.Url, body, { headers: header })
      .map(
        data => {
          return data;
        }
      );
  }

  enviarNombre(nom:string) {

    let token: string = sessionStorage.getItem('token');

    let header = new HttpHeaders({
      "Authorization": token,
      "Content-Type": "application/json",

    })

    let body = new Saludar(nom);

    return this.http.post<string>(this.saludarUrl, body, { headers: header })
      .map(
        data => {
          return data;
        }
      );
  }

  enviarTablas(tab: EnviarTablas) {

    let token: string = sessionStorage.getItem('token');

    let header = new HttpHeaders({
      "Authorization": token,
      "Content-Type": "application/json",

    })



    return this.http.post<string>(this.enviarTablasUrl, tab, { headers: header })
      .map(
        data => {
          return data;
        }
      );
  }

  GetPersonas(){

    let token: string = sessionStorage.getItem('token');

    let header = new HttpHeaders({
      "Authorization": token,
      "Content-Type": "application/json",

    })

    return this.http.get<Persona[]>(this.personasUrl,  { headers: header })
    .map(
      data => {
        return data;
      }
    );
  }


}
