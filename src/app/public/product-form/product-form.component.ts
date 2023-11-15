import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  constructor(private el: ElementRef){}
  showUrl(event: any): void {
    const inputFile = this.el.nativeElement.querySelector('#fileInput');

    if (inputFile && inputFile.files && inputFile.files.length > 0) {
      const url = inputFile.files[0].name;
      console.log('Nombre del archivo seleccionado: ' + url);
    }
  }

}
