import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadComponent } from './seguridad.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';

@NgModule({
  declarations: [
    SeguridadComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SeguridadModule { }
