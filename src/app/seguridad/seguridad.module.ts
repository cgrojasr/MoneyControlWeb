import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadComponent } from './seguridad.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SeguridadComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SeguridadModule { }
