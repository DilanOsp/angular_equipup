import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/shared/servces/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  mail: string = '';
  password: string = '';


  constructor(private router: Router,private _snackBar: MatSnackBar,private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, 
    });
  }
  
  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    
    this.userService.getByMail(this.mail).subscribe((data)=>{
      if(data == null){
        this.openSnackBar('el usuario no existe', 'Cerrar');

      }else if(data.password == this.password){
        this.router.navigate(['/home']);
      }else{
        this.openSnackBar('contraseña incorrecta', 'Cerrar');
      }


    })
    
    console.log(this.loginForm.value);
  }

}