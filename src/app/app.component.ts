import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './models/usuario-model';
import { CookieService } from 'ngx-cookie-service'

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
    if(!this.cookieService.get('usuarioModel')){
      this.cookieService.set('usuarioModel', JSON.stringify(this.usuarioModel))
      this.cookieService.set('token', 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiR2VuYXJvIFJvamFzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicGNpc2Nyb2pAdXBjLmVkdS5wZSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjY2Zjg2ZjAxNGEyNWYxMGUwNjcwODdhNiIsImV4cCI6MTczMDQ3MjcxMn0.lsxlCMM3f5GhJzR6nWLVIdAul3skDCWRRS76Qn2Yk3M')
    }
  }
}
