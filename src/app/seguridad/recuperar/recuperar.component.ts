import { Component } from '@angular/core';
import { UsuarioRecuperar } from '../../models/usuario-recuperar';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.css'
})
export class RecuperarComponent {
  usuario_recuperar: UsuarioRecuperar = {
    correo: '',
    confirmar_correo: ''
  }
}
