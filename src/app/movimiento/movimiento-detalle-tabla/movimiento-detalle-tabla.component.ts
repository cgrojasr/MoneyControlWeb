import { Component, Input } from '@angular/core';
import { MovimientoDetalleItem } from '../../models/moviemiento-detalle-item';

@Component({
  selector: 'app-movimiento-detalle-tabla',
  templateUrl: './movimiento-detalle-tabla.component.html',
  styleUrl: './movimiento-detalle-tabla.component.css'
})
export class MovimientoDetalleTablaComponent {
  @Input() movimientos: MovimientoDetalleItem[] = []
}
