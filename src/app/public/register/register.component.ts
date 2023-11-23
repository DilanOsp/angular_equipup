import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { UserService } from 'src/app/shared/servces/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private userService: UserService, private _snackBar: MatSnackBar){}
  registeForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    mail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, 
    });
  }
  onSubmit() {

    const formData = this.registeForm.value;
    this.userService.save(formData).subscribe((data)=>{
      this.openSnackBar('Usuario registrado corectamente', 'Cerrar');

    },
    
    (errorResponse)=>{
      this.openSnackBar('El usuario ya existe', 'Cerrar');
    }
    )


  }


}
