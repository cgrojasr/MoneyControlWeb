import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioModel } from '../../models/usuario-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  usuarioModel: UsuarioModel = {
    id_usuario: '',
    nombre: '',
    apellido: ''
  }

  login: boolean = false
  /**
   *
   */
  constructor(
    private cookiService: CookieService
  ) {
  }

  ngOnInit(): void {
    
    if(this.cookiService.get('usuarioModel') !== '')
    {
      this.usuarioModel = JSON.parse(this.cookiService.get('usuarioModel')) 
      this.login = true
    }
  }

}
