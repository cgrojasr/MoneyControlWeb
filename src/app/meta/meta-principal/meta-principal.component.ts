import { Component, OnInit } from '@angular/core';
import { MetaPrincipalItem } from '../../models/meta-principal-item';
import { MetaService } from '../../services/meta/meta.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioModel } from '../../models/usuario-model';

@Component({
  selector: 'app-meta-principal',
  templateUrl: './meta-principal.component.html',
  styleUrl: './meta-principal.component.css'
})
export class MetaPrincipalComponent implements OnInit {
  metaPrincipalItems: MetaPrincipalItem[] = []
  // usuarioModel: UsuarioModel = {
  //   id_usuario: '',
  //   nombre: '',
  //   apellido: ''
  // }

  constructor(
    private router:Router,
    private metaService: MetaService,
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    if(this.cookieService.get('usuarioModel')){
      const usuarioModel: UsuarioModel = JSON.parse(this.cookieService.get('usuarioModel'))
      this.metaService.listarPorUsuario(usuarioModel.id_usuario).subscribe(
        (result) => {
          this.metaPrincipalItems = result
        }
      )
    }
  }

  btnRegistrar_OnClick():void{
    this.router.navigateByUrl('meta/registrar/0')
  }
}
