import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovimientoComponent } from './movimiento.component';
import { HomeComponent } from './home/home.component';
import { MovimientoDetalleComponent } from './movimiento-detalle/movimiento-detalle.component';
import { MovimientoRegistrarComponent } from './movimiento-registrar/movimiento-registrar.component';

const routes: Routes = [
  {
    path: '',
    component: MovimientoComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'movimiento-registrar',
        component: MovimientoRegistrarComponent
      },
      {
        path: 'movimiento-detalle',
        component: MovimientoDetalleComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovimientoRoutingModule { }
