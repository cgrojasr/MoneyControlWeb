import { Component, OnInit } from '@angular/core';
import { MetaModel } from '../../models/meta-model';
import { DatePipe } from '@angular/common';
import { MetaService } from '../../services/meta/meta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioModel } from '../../models/usuario-model';


@Component({
  selector: 'app-meta-registrar',
  templateUrl: './meta-registrar.component.html',
  styleUrl: './meta-registrar.component.css'
})
export class MetaRegistrarComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  fecha_actual = this.datepipe.transform(new Date(),'yyyy-MM-dd')

  titulo: string = 'Registrar Meta'
  estado: number = 0 //0:registrar, 1:modificar, 2:detalles
  bloqueado: boolean = false

  metaModel: MetaModel = {
    id_meta:0, nombre: '', monto: 0, url_image:'', id_usuario: '', fecha_inicio: this.fecha_actual, fecha_final: this.fecha_actual
  }

  constructor(
    private metaService: MetaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        this.estado = params['estado']
        if(this.estado==2){
          this.bloqueado = true
          this.titulo = 'Detalles de la Meta'
          this.metaService.buscarPorId(params['id_meta']).subscribe(
            result=>{
              this.metaModel = result
            }
          )
        }
      }
    )
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
      this.metaModel.url_image = fileList[0].name
      // let saveFileName = fileList[0].name
      // const file = new Blob([''], {type: "text/plain"})
      // const link = document.createElement("a")
      // link.href = URL.createObjectURL(file)
      // link.download = saveFileName
      // link.click()
      // link.remove()
    }
  }

  btnGuardar_Click():void{
    if(this.cookieService.get('usuarioModel')){
      const usuarioModel:UsuarioModel = JSON.parse(this.cookieService.get('usuarioModel'))
      if(this.estado==0){
        this.metaModel.id_usuario = usuarioModel.id_usuario
        this.metaService.registrar(this.metaModel).subscribe(
          result=>{
            console.log(result)
            this.metaModel.id_meta = result
            this.router.navigateByUrl('meta/principal')
          }
        )
      }

      if(this.estado===1){
        
      }
    }
  }

  btnCancelar_Click():void{
    this.router.navigateByUrl('meta/principal')
  }
}
