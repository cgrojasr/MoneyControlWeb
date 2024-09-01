import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaPrincipalComponent } from './meta-principal/meta-principal.component';
import { MetaRegistrarComponent } from './meta-registrar/meta-registrar.component';
import { MetaEliminarComponent } from './meta-eliminar/meta-eliminar.component';
import { MetaComponent } from './meta.component';
import { MetaRoutingModule } from './meta-routing.module';
import { MetaPrincipalItemComponent } from './meta-principal-item/meta-principal-item.component';
import { MetaDetalleComponent } from './meta-detalle/meta-detalle.component';



@NgModule({
  declarations: [
    MetaPrincipalComponent,
    MetaRegistrarComponent,
    MetaEliminarComponent,
    MetaComponent,
    MetaPrincipalItemComponent,
    MetaDetalleComponent
  ],
  imports: [
    CommonModule,
    MetaRoutingModule
  ]
})
export class MetaModule { }
