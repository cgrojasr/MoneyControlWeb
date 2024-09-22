import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MetaPrincipalItem } from '../../models/meta-principal-item';
import { MetaModel } from '../../models/meta-model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  // metaPrincipalItems: MetaPrincipalItem[] = [
  //   {
  //     id_meta: 1,
  //     nombre: 'PlayStation 5',
  //     monto: 2000,
  //     porcentaje_avance: 50,
  //     url_image: 'Play5_meta.jpg'
  //   },
  //   {
  //     id_meta: 2,
  //     nombre: 'TV Sony 65"',
  //     monto: 6000,
  //     porcentaje_avance: 20,
  //     url_image: 'SonyTV_meta.png'
  //   },
  //   {
  //     id_meta: 3,
  //     nombre: 'Control para PS',
  //     monto: 500,
  //     porcentaje_avance: 10,
  //     url_image: 'ControlPS5_meta.webp'
  //   },
  //   {
  //     id_meta: 4,
  //     nombre: 'Nintendo Switch',
  //     monto: 1200,
  //     porcentaje_avance: 40,
  //     url_image: 'Switch_meta.jpg'
  //   },
  // ]

  // metaModel: MetaModel = {
  //   id_meta: 6,
  //   nombre: 'dummy',
  //   id_usuario: '1',
  //   monto: 100,
  //   url_image: '',
  //   fecha_inicio: '2024-09-01',
  //   fecha_final: '2024-09-01'
  // }

  constructor(
    private httpClient: HttpClient
  ) { }

  listarPorUsuario(id_usuario:string):Observable<MetaPrincipalItem[]>{
    return this.httpClient.get<MetaPrincipalItem[]>(`http://localhost:5254/api/meta/ListarPorUsuario?id_usuario=${id_usuario}`)
    //return of(this.metaPrincipalItems)
  }

  registrar(metaModel: MetaModel):Observable<number>{
    // let metaPrincipalItem: MetaPrincipalItem = {
    //   id_meta: 5,
    //   nombre: meta.nombre,
    //   monto: meta.monto,
    //   porcentaje_avance: 0,
    //   url_image: meta.url_image
    // }
    
    // this.metaPrincipalItems.push(metaPrincipalItem)
    // console.log(this.metaPrincipalItems)
    //return of(metaPrincipalItem.id_meta)
    return this.httpClient.post<number>(`http://localhost:5254/api/meta`, metaModel)
  }

  buscarPorId(id_meta:number):Observable<MetaModel>{
    // return of(this.metaModel)
    return this.httpClient.get<MetaModel>(`http://localhost:5254/api/meta?id_meta=${id_meta}`)
  }
}
