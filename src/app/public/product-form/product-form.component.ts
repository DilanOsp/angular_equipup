import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  constructor(private el: ElementRef){}
  showUrl(event: any): void {
    const inputArchivo = this.el.nativeElement.querySelector('#fileInput');

    if (inputArchivo && inputArchivo.files && inputArchivo.files.length > 0) {
      const direccionArchivo = inputArchivo.files[0].name;
      console.log('Nombre del archivo seleccionado: ' + direccionArchivo);
    }
  }

}
