import { Component, OnInit } from '@angular/core';
import { Usuario, LoginResponse } from "../models/index";
import { LlamadaService } from "../services/llamada.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  return:string;
  badLogin: boolean;
  respuesta:LoginResponse;

  constructor(private llamada: LlamadaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '');
  }

  login() {
    sessionStorage.setItem('nombre',this.usuario.nombre);
    this.llamada.loginUsuario(this.usuario.nombre, this.usuario.password)
      .subscribe(
        data => {
          console.log(data);
          this.respuesta = data;
          sessionStorage.setItem('token',this.respuesta.token);
          sessionStorage.setItem('nombre',this.respuesta.nombre);
          this.router.navigateByUrl(this.return);
          if(this.respuesta.token == "" && this.respuesta.nombre == null){
            this.badLogin = true;
            this.usuario.nombre = "";
            this.usuario.password = "";
          }
        },
        err =>{
          if(err.status == 401){
            this.badLogin = true;
            this.usuario.nombre = "";
            this.usuario.password = "";

          }
        }
      )
  }

}
