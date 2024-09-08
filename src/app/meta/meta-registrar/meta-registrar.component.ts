import { Component } from '@angular/core';
import { MetaModel } from '../../models/meta-model';
import { DatePipe } from '@angular/common';
import { MetaService } from '../../services/meta/meta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meta-registrar',
  templateUrl: './meta-registrar.component.html',
  styleUrl: './meta-registrar.component.css'
})
export class MetaRegistrarComponent {
  datepipe: DatePipe = new DatePipe('en-US')
  fecha_actual = this.datepipe.transform(new Date(),'yyyy-MM-dd')

  meta: MetaModel = {
    id_meta:0, nombre: '', monto: 0, url_image:'', id_usuario: '', fecha_inicio: this.fecha_actual, fecha_final: this.fecha_actual
  }

  constructor(
    private metaService: MetaService,
    private router: Router
  ) {
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
      this.meta.url_image = fileList[0].name
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
    this.metaService.registrar(this.meta).subscribe(
      result=>{
        this.meta.id_meta = result
        this.router.navigateByUrl('meta/principal')
      }
    )
  }

  btnCancelar_Click():void{
    this.router.navigateByUrl('meta/principal')
  }
}
