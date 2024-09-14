import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaPrincipalComponent } from './meta-principal/meta-principal.component';
import { MetaRegistrarComponent } from './meta-registrar/meta-registrar.component';
import { MetaEliminarComponent } from './meta-eliminar/meta-eliminar.component';
import { MetaComponent } from './meta.component';
import { MetaRoutingModule } from './meta-routing.module';
import { MetaPrincipalItemComponent } from './meta-principal-item/meta-principal-item.component';
import { MetaDetalleComponent } from './meta-detalle/meta-detalle.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MetaDetalleOperacionComponent } from './meta-detalle-operacion/meta-detalle-operacion.component';

// Aquí fue injectado FormsModule para utilizar ngModel
@NgModule({
  declarations: [
    MetaPrincipalComponent,
    MetaRegistrarComponent,
    MetaEliminarComponent,
    MetaComponent,
    MetaPrincipalItemComponent,
    MetaDetalleComponent,
    MetaDetalleOperacionComponent
  ],
  imports: [
    CommonModule,
    MetaRoutingModule,
    SharedModule,
    FormsModule 
  ]
})
export class MetaModule { }
