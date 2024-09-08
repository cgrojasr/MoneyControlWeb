import { Component, OnInit } from '@angular/core';
import { MetaModel } from '../../models/meta-model';
import { MetaService } from '../../services/meta/meta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meta-detalle',
  templateUrl: './meta-detalle.component.html',
  styleUrl: './meta-detalle.component.css'
})
export class MetaDetalleComponent implements OnInit {

  metaModel: MetaModel = {
    id_meta: 0,
    nombre: '',
    id_usuario: '0',
    monto: 0,
    url_image: '',
    fecha_inicio: '',
    fecha_final: ''
  }
  
  constructor(
    private metaService: MetaService,
    private activedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      params=>{
        console.log(params["id_meta"])
        this.metaService.buscarPorId(params["id_meta"]).subscribe(
          result=>{
            this.metaModel = result
          }
        )
      }
    )
    //linea de codigo
  }
}
