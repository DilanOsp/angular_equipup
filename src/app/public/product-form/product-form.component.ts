import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { image } from 'src/app/shared/model/image';
import { ImageService } from 'src/app/shared/servces/image.service';
import { ProductService } from 'src/app/shared/servces/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  constructor(private imageService: ImageService, private productService:ProductService,private fb: FormBuilder){}
  selectedFile: File | undefined;
  uploadedImageUrl:string  ='';
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

  }
  registeForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    price: ['', [Validators.required]],



  })

  uploadImage(): Observable<image> {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      return this.imageService.uploadImage(formData).pipe(
        switchMap(response => {
          const imageUrl = response.data.url;

          // Construye tu objeto de imagen aquí
          const img: image = {
            url: imageUrl,
            // Otras propiedades de tu objeto imagen
          };

          // Retorna el objeto de imagen
          return of(img);
        })
      );
    } else {
      return throwError('No se seleccionó ningún archivo');
    }
  }
  uploadProduct(): void{
    

    this.uploadImage().subscribe(
      imageRequest => {
        const formData = { ...this.registeForm.value, imageRequest};
        

        
        this.productService.save(formData).subscribe((response) => {
          console.log(typeof response)
        });
      },
      error => {
        console.error('Error al subir la imagen:', error);
      }
    );
  }

}
