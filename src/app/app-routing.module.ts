import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'seguridad',
    pathMatch: 'full'
  },
  {
    path: 'meta',
    loadChildren: ()=>import('./meta/meta.module').then(m=>m.MetaModule)
  },
  {
    path: 'seguridad',
    loadChildren: ()=>import('./seguridad/seguridad.module').then(m=>m.SeguridadModule)
  },
  {
    path: 'movimiento',
    loadChildren: ()=>import('./movimiento/movimiento.module').then(m=>m.MovimientoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
