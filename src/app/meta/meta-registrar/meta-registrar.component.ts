import { Component } from '@angular/core';
import { MetaModel } from '../../models/meta-model';
import { DatePipe } from '@angular/common';


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

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList[0]);
      // let saveFileName = fileList[0].name
      // const file = new Blob([''], {type: "text/plain"})
      // const link = document.createElement("a")
      // link.href = URL.createObjectURL(file)
      // link.download = saveFileName
      // link.click()
      // link.remove()
    }
  }
}
