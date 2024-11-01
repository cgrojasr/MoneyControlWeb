import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientoComponent } from './movimiento.component';
import { HomeComponent } from './home/home.component';
import { MovimientoRoutingModule } from './movimiento-routing.module';
import { SharedModule } from "../shared/shared.module";
import { MovimientoDetalleComponent } from './movimiento-detalle/movimiento-detalle.component';
import { MovimientoRegistrarComponent } from './movimiento-registrar/movimiento-registrar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MovimientoComponent,
    HomeComponent,
    MovimientoDetalleComponent,
    MovimientoRegistrarComponent
  ],
  imports: [
    MovimientoRoutingModule,
    SharedModule,
    NgxChartsModule
  ]
})

export class MovimientoModule { }
