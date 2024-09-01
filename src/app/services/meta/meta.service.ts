import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MetaPrincipalItem } from '../../models/meta-principal-item';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  metaPrincipalItems: MetaPrincipalItem[] = [
    {
      id_meta: 1,
      nombre: 'PlayStation 5',
      monto: 2000,
      porcentaje_avance: 50,
      url_image: 'Play5_meta.jpg'
    },
    {
      id_meta: 2,
      nombre: 'TV Sony 65"',
      monto: 6000,
      porcentaje_avance: 20,
      url_image: 'SonyTV_meta.png'
    },
    {
      id_meta: 3,
      nombre: 'Control para PS',
      monto: 500,
      porcentaje_avance: 10,
      url_image: 'ControlPS5_meta.webp'
    },
    {
      id_meta: 4,
      nombre: 'Nintendo Switch',
      monto: 1200,
      porcentaje_avance: 40,
      url_image: 'Switch_meta.jpg'
    },
  ]

  constructor() { }

  listarPorUsuario(id_usuario:string):Observable<MetaPrincipalItem[]>{
    return of(this.metaPrincipalItems)
  }
}
