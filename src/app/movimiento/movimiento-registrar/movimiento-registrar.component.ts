import { Component } from '@angular/core';
import { MovimientoModel } from '../../models/movimiento-model';
import { Router } from '@angular/router';
import { MovimientoService } from '../../services/movimiento/movimiento.service';

@Component({
  selector: 'app-movimiento-registrar',
  templateUrl: './movimiento-registrar.component.html',
  styleUrl: './movimiento-registrar.component.css'
})
export class MovimientoRegistrarComponent {
  movimiento_model: MovimientoModel = {
    id_movimiento: 0,
    id_usuario: '',
    id_tipo_movimiento: '',
    fecha: '',
    id_medio_financiero: 0,
    id_moneda: '',
    monto: 0,
    descripcion: ''
  }

  constructor(
    private router: Router,
    private movimientoService: MovimientoService
  ) { }

  btnRegistrar():void {
    this.movimientoService.registrar(this.movimiento_model).subscribe(
      result => {
        console.log(result)
      }
    )
    this.router.navigateByUrl('movimiento/movimiento-detalle');
  }

  btnCancelar():void {
    this.router.navigateByUrl('movimiento/movimiento-detalle');
  }
}
