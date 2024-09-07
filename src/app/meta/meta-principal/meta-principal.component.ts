import { Component, OnInit } from '@angular/core';
import { MetaPrincipalItem } from '../../models/meta-principal-item';
import { MetaService } from '../../services/meta/meta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meta-principal',
  templateUrl: './meta-principal.component.html',
  styleUrl: './meta-principal.component.css'
})
export class MetaPrincipalComponent implements OnInit {
  metaPrincipalItems: MetaPrincipalItem[] = []
  // metaPrincipalItems: MetaPrincipalItem[] = [
  //   {
  //     id_meta: 1,
  //     nombre: 'PlayStation 5',
  //     monto: 2000,
  //     porcentaje_avance: 50
  //   },
  //   {
  //     id_meta: 2,
  //     nombre: 'TV Sony 65"',
  //     monto: 6000,
  //     porcentaje_avance: 20
  //   },
  //   {
  //     id_meta: 3,
  //     nombre: 'Control para PS',
  //     monto: 500,
  //     porcentaje_avance: 10
  //   },
  //   {
  //     id_meta: 4,
  //     nombre: 'Nintendo Switch',
  //     monto: 1200,
  //     porcentaje_avance: 40
  //   },
  // ]

  constructor(
    private router:Router,
    private metaService: MetaService
  ) {
  }

  ngOnInit(): void {
    this.metaService.listarPorUsuario('').subscribe(
      result => {
        this.metaPrincipalItems = result
      }
    )
  }

  btnRegistrar_OnClick():void{
    this.router.navigateByUrl('meta/registrar')
  }
}
