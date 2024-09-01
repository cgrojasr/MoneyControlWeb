import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MetaComponent } from './meta.component';
import { MetaPrincipalComponent } from './meta-principal/meta-principal.component';
import { MetaRegistrarComponent } from './meta-registrar/meta-registrar.component';
import { MetaDetalleComponent } from './meta-detalle/meta-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: MetaComponent,
    children: [
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
      },
      {
        path: 'principal',
        component: MetaPrincipalComponent
      },
      {
        path: 'registrar',
        component: MetaRegistrarComponent
      }
      ,
      {
        path: 'detalle/:id_meta',
        component: MetaDetalleComponent
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
export class MetaRoutingModule { }
