import { Component } from '@angular/core';
import { UsuarioRegistrar } from '../../models/usuario_registrar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  usuario_registrar: UsuarioRegistrar = {
    nombre: '',
    apellido: '',
    correo: ''
  }

  constructor(
    private router: Router
  ) {
  }
}
