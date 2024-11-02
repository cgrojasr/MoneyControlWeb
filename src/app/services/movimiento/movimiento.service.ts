import { Injectable } from '@angular/core';
import { MovimientoDetalleItem } from '../../models/moviemiento-detalle-item';
import { Observable, of } from 'rxjs';
import { MovimientoModel } from '../../models/movimiento-model';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
  movimientos: MovimientoDetalleItem[] = [
    {
      id_movimiento: 1,
      descripcion: 'Compra de pan',
      fecha: '2024-11-01',
      monto: '(10)'
    },
    {
      id_movimiento: 2,
      descripcion: 'Sueldo UPC',
      fecha: '2024-11-01',
      monto: '100'
    },
    {
      id_movimiento: 3,
      descripcion: 'Compra de huevos',
      fecha: '2024-11-02',
      monto: '(30)'
    }
  ]
  constructor() { }

  listarMovimientosPeriodo(periodo: string): Observable<MovimientoDetalleItem[]> {
    return of(this.movimientos)
  }

  registrar(movimiento: MovimientoModel): Observable<number> {
    this.movimientos.push({
      id_movimiento: this.movimientos.length + 1,
      descripcion: movimiento.descripcion,
      fecha: movimiento.fecha,
      monto: movimiento.monto.toString()
    } as MovimientoDetalleItem)
    console.log(this.movimientos)
    return of(100)
  }
}
