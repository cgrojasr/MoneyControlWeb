import { Component, Input } from '@angular/core';
import { MetaPrincipalItem } from '../../models/meta-principal-item'
import { Router } from '@angular/router';

@Component({
  selector: 'app-meta-principal-item',
  templateUrl: './meta-principal-item.component.html',
  styleUrl: './meta-principal-item.component.css'
})
export class MetaPrincipalItemComponent {
  @Input() metaPrincipalItem: MetaPrincipalItem = {
    id_meta: 0, nombre: '', monto: 0, porcentaje_avance:0, url_image:''
  }

  /**
   *
   */
  constructor(
    private router: Router
  ) {
  }

  btnDetalle_click(id_meta: number):void{
    this.router.navigateByUrl('meta/detalle/2/'+id_meta)
  }
}
