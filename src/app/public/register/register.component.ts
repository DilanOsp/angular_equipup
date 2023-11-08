import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { UserService } from 'src/app/shared/servces/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private userService: UserService){}
  registeForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    mail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })
  onSubmit() {

    const formData = this.registeForm.value;
    this.userService.save(formData).subscribe((data)=>{
      //logica para redirigir al inicio despues de creado 
      console.log('valido')

    },
    (errorResponse)=>{
      //feedback de que el correo ya esta registrado
      console.log('mail ya registrado')
    }
    )


  }


}
