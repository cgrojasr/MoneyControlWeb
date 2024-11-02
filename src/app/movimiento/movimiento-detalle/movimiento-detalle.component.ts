import { Component, OnInit } from '@angular/core';
import { MovimientoDetalleItem } from '../../models/moviemiento-detalle-item';
import { MovimientoService } from '../../services/movimiento/movimiento.service';

@Component({
  selector: 'app-movimiento-detalle',
  templateUrl: './movimiento-detalle.component.html',
  styleUrl: './movimiento-detalle.component.css'
})
export class MovimientoDetalleComponent implements OnInit {
  movimientos: MovimientoDetalleItem[] = []
  balance: string = '0'

  constructor(
    private movimientoService: MovimientoService
  ) { }

  ngOnInit(): void {
    this.movimientoService.listarMovimientosPeriodo('2024-11').subscribe(
      result=>{
        this.movimientos = result
      }
    )
  }
}
