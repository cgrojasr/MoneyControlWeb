import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadComponent } from './seguridad.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule } from '@angular/forms';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { RecuperarComponent } from './recuperar/recuperar.component';

@NgModule({
  declarations: [
    SeguridadComponent,
    LoginComponent,
    RegistrarComponent,
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
