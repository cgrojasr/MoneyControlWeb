import { Component, OnInit } from '@angular/core';
import { UsuarioAutenticar } from '../../models/usuario-autenticar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  usuario_autenticar: UsuarioAutenticar = {
    usuario: '',
    password: ''
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  btnLoginClick() {
    this.router.navigateByUrl('movimiento');
  }

  btnRegistrarClick() {
    this.router.navigateByUrl('seguridad/registrar');
  }

  btnRecuperarClick() {
    console.log('Recuperar contraseña');
  }
}
