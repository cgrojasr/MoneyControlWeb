import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './models/usuario-model';
import { CookieService } from 'ngx-cookie-service'
import { json } from 'stream/consumers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MoneyControlWeb';
  usuarioModel: UsuarioModel = {
    id_usuario: '66d08b8eb71ec84decec19c4',
    nombre: 'Christian',
    apellido: 'Rojas'
  }

  //Instalar CookieService para almacenar el usuario logeado
  //npm install ngx-cookie-service --save

  //Inyectar la dependencia de CookieService
  constructor(
    private cookieService: CookieService
  ) {
  }
  
  ngOnInit(): void {
    this.cookieService.set('usuarioModel', JSON.stringify(this.usuarioModel))
  }
}
